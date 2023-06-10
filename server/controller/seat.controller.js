const SeatModel = require("../models/seat.model");

// Function to create seats and save them in the database
exports.createSeats = async (req, res) => {
    const seats = []; // Empty array to store the seat objects

    // Loop to create 80 seats
    for (let i = 0; i < 80; i++) {
        // Calculate the row letter based on index
        const rowLetter = String.fromCharCode("a".charCodeAt(0) + Math.floor(i / 7));

        // Calculate the column number based on index
        const colNumber = (i % 7) + 1;

        // seat number
        const seatNumber = rowLetter + colNumber;

        // Create a new seat object
        const seat = new SeatModel({ seatNumber, isBooked: false });
        seats.push(seat);
    }

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
    const numSeats = req.body.seats; // Number of seats to book

    if (!numSeats || numSeats <= 0 || numSeats > 7) {
        res.status(400).json({ message: "Invalid seats input" })
    }

    try {
        const totalSeats = await SeatModel.find(); // total seats
        const availableSeats = await SeatModel.find({ isBooked: false }); // total available seats

        let bookedSeats = []; // Store the seat numbers that were booked

        //  priority -> book the all seats in one row (if possible)
        for (let i = 0; i <= totalSeats.length - numSeats; i++) {
            // Adjust the seats per row for the last row
            let seatsPerRow = i < totalSeats.length - 3 ? 7 : 3;

            // Check if there are enough contiguous available seats in this row
            if (
                (i % seatsPerRow) + numSeats <= seatsPerRow &&
                totalSeats.slice(i, i + numSeats).every((seat) => !seat.isBooked)
            ) {
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

                res.status(200).json({ message: "Seats booked successfully.", bookedSeats });
                return; // out from loop
            }
        }

        // If seats are not available in one row, book the nearby seats
        if (availableSeats.length >= numSeats) {
            let minDistance = Infinity;
            let startIndex = 0;

            // Find the seats with the minimum distance
            for (let i = 0; i <= availableSeats.length - numSeats; i++) {
                let distance = (i + numSeats - 1) - i;
                if (distance < minDistance) {
                    minDistance = distance;
                    startIndex = i;
                }
            }

            // booked seats
            for (let i = startIndex; i < startIndex + numSeats; i++) {
                bookedSeats[i - startIndex] = availableSeats[i];
            }

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