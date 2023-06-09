const mongoose = require("mongoose");

// seat schema
const seatSchema = mongoose.Schema({
    seatNumber: { type: String, required: true },
    isBooked: { type: Boolean, default: false },
}, {
    versionKey: false
});

// seat model
const SeatModel = new mongoose.model("seat", seatSchema);

module.exports = SeatModel;