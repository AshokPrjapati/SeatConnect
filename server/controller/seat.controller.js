const SeatModel = require("../models/seat.model");

exports.createSeats = async () => {
    const seats = new Array(80);
    for (let i = 0; i < 80; i++) {
        const rowLetter = String.fromCharCode("a".charCodeAt(0) + Math.floor(i / 7));
        const colNumber = (i % 7) + 1;
        const seatNumber = rowLetter + colNumber;
        const seat = new SeatModel({ seatNumber, isBooked: false });
        seats[i] = seat;
    }

    try {
        await seats.save();
    } catch (error) {
        console.log(error);
    }
}