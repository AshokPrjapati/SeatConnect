const express = require("express");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const { createSeats, getAllSeats } = require("../controller/seat.controller");

const seatRouter = express.Router();

// Route for creating seats
seatRouter.post("/create_seats", verifyAdmin, createSeats);

// Route for retrieving all seats
seatRouter.get("/all_seats", getAllSeats);

module.exports = seatRouter;