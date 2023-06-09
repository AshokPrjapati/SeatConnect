const express = require("express");
const cors = require("cors");

const connection = require('./config/db.config'); // Import the database connection
const seatRouter = require("./routes/seat.routes")

require("dotenv").config();

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON data in the request body

// Home route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Seat routes
app.use("/seat", seatRouter);

// Wildcard route for handling unknown routes
app.get("*", (req, res) => {
    res.status(404).json("Not Found");
});

// Start the server and establish the database connection
const startServer = async () => {
    try {
        console.log('⏳ Database connecting...');
        await connection; // Connect to the database
        console.log('✅ Database connected.');
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server running on port ${process.env.PORT || 8080}`);
        });
    } catch (error) {
        console.error("❌ error:", "Error connecting to the database:", error);
    }
};

startServer();

