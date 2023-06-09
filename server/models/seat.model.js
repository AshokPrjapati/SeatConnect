const mongoose = require("mongoose");

// seat schema
const seatSchema = mongoose.Schema({
    seatNumber: { type: Number, required: true },
    isBooked: { type: Boolean, default: false },
});

// seat model
const SeatModel = new mongoose.model("seat", seatSchema);

module.exports = SeatModel;