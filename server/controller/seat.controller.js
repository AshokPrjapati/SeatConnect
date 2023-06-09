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
        const allSeats = await SeatModel.find(); // Retrieve all seats from the database
        res.status(200).json({ seats: allSeats }); // Send the retrieved seats 
    } catch (error) {
        //error handling
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
