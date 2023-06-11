const { generateSeats } = require("../helper/seatGenerator");
const SeatModel = require("../models/seat.model");

// save created seats in the database
exports.createSeats = async (req, res) => {
    const seats = generateSeats();
    try {
        // Insert all the seats into the database 
        await SeatModel.insertMany(seats);
        res.status(200).json({ message: "Seats created succesfully", seats })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.mesage });
    }
};

//  Get all seats 
exports.getAllSeats = async (req, res) => {
    try {
        const allSeats = await SeatModel.find().sort({ seatNumber: 1 }); // Sort seats by seatNumber in ascending order
        res.status(200).json({ seats: allSeats }); // Send the sorted seats 
    } catch (error) {
        // Error handling
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve seats.' });
    }
};

// Delete all seats
exports.deleteAllSeats = async (req, res) => {
    try {
        await SeatModel.deleteMany(); // Delete all documents in the SeatModel collection
        res.status(200).json({ message: "All seats deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete all seats." });
    }
};


// seat booking
exports.bookSeats = async (req, res) => {
    const numSeats = req.body.seatsCount; // Number of seats to book

    if (!numSeats || numSeats <= 0 || numSeats > 7) {
        return res.status(400).json({ message: "Invalid seats input" });
    }

    try {
        const totalSeats = await SeatModel.find(); // Fetch all seats
        let bookedSeats = []; // Store the seat numbers that were booked
        let isSeatFound = false;

        // Priority -> Book all seats in one row (if possible)
        let i = 0;
        while (i <= totalSeats.length - numSeats) {
            // Determine the number of seats per row, considering the last row
            let seatsPerRow = i <= totalSeats.length - 3 ? 7 : 3;

            // Numerator for finding the correct remainder
            let numerator = i <= totalSeats.length - 3 ? i : i + 1;

            // Check if there are enough contiguous available seats in this row
            if ((numerator % seatsPerRow) + numSeats <= seatsPerRow) {
                if (totalSeats.slice(i, i + numSeats).every((seat) => !seat.isBooked)) {
                    // If so, book them
                    const seatsToBook = totalSeats.slice(i, i + numSeats);
                    for (let j = 0; j < numSeats; j++) {
                        seatsToBook[j].isBooked = true; // Mark seat as booked
                        bookedSeats.push(seatsToBook[j]); // Store the seat 
                    }

                    // Update the booked seats in the database
                    await SeatModel.updateMany(
                        { _id: { $in: seatsToBook.map((seat) => seat._id) } },
                        { isBooked: true }
                    );

                    isSeatFound = true;

                    return res.status(200).json({ message: "Seats booked successfully.", bookedSeats });
                } else {
                    // Check next seats for availability
                    i++;
                }
            } else {
                // Move to the next row
                i += numSeats - 1;
            }
        }

        // total available seats
        const availableSeats = totalSeats.filter((seat, i) => {
            if (!seat.isBooked) {
                seat.index = i;
                return true;
            }
        });

        // If seats are not available in one row, book the nearby seats
        if (!isSeatFound && availableSeats.length >= numSeats) {
            let minDistance = Infinity;
            let startIndex = 0;

            // Find the seats with the minimum distance
            for (let i = 0; i <= availableSeats.length - numSeats; i++) {
                let distance = availableSeats[i + numSeats - 1].index - availableSeats[i].index;
                if (distance < minDistance) {
                    minDistance = distance;
                    startIndex = i;
                }
            }

            // Booked seats
            let bookedSeats = availableSeats.slice(startIndex, startIndex + numSeats);

            // Update the booked seats in the database
            await SeatModel.updateMany(
                { _id: { $in: bookedSeats.map((seat) => seat._id) } },
                { isBooked: true }
            );

            return res.status(200).json({ message: "Seats booked successfully.", bookedSeats });
        }


        return res.status(400).json({ message: "No seats available for booking." });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to book seats." });
    }
}


// seat reset
exports.resetSeats = async (req, res) => {
    try {
        await SeatModel.updateMany({}, { $set: { isBooked: false } });
        return res.status(200).json({ message: "Seats resetted succesfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to reset." });
    }
}