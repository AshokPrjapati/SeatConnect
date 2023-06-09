const SeatModel = require("../models/seat.model");

// Function to create seats and save them in the database
exports.createSeats = async () => {
    const seats = []; // Empty array to store the seat objects

    // Loop to create 80 seats
    for (let i = 0; i < 80; i++) {
        // Calculate the row letter based on index
        const rowLetter = String.fromCharCode("a".charCodeAt(0) + Math.floor(i / 7));

        // Calculate the column number based on index
        const colNumber = (i % 7) + 1;

        const seatNumber = rowLetter + colNumber;

        // Create a new seat object
        const seat = new SeatModel({ seatNumber, isBooked: false });
        seats.push(seat);
    }

    try {
        // Insert all the seats into the database 
        await SeatModel.insertMany(seats);
        console.log("Seats created successfully.");
    } catch (error) {
        console.log(error);
    }
};