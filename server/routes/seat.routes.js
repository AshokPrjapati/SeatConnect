const express = require("express");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const { createSeats, getAllSeats, deleteAllSeats, bookSeats, resetSeats } = require("../controller/seat.controller");

const seatRouter = express.Router();

// Route for creating seats
seatRouter.post("/create", verifyAdmin, createSeats);

// Route for retrieving all seats
seatRouter.get("/get_all", getAllSeats);

// Route for deleting all seats
seatRouter.delete("/delete_all", verifyAdmin, deleteAllSeats);

// Route for booking seats
seatRouter.post("/book", bookSeats);

// Route for reset seats
seatRouter.get("/reset", resetSeats);

module.exports = seatRouter;