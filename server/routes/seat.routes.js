const express = require("express");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const { createSeats, getAllSeats, deleteAllSeats } = require("../controller/seat.controller");

const seatRouter = express.Router();

// Route for creating seats
seatRouter.post("/create", verifyAdmin, createSeats);

// Route for retrieving all seats
seatRouter.get("/get_all", getAllSeats);

// Route for deleting all seats
seatRouter.delete("/delete_all", verifyAdmin, deleteAllSeats);

module.exports = seatRouter;