const express = require("express");
const cors = require("cors");

const connection = require('./config/db.config'); // Import the database connection

require("dotenv").config();

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON data in the request body

app.get("/", (req, res) => {
    res.send("Home Page"); // Set up a route for the root URL ("/") 
});

app.get("*", (req, res) => {
    res.status(404).json("not found"); // Set up a wildcard route 
});

app.listen(process.env.PORT || 8080, async () => {
    try {
        console.log(`server running on port ${process.env.PORT || 8080}`);
        console.log('⏳ Database connecting...');
        await connection; // Wait for the database connection to be established
        console.log('✅ Database connected.');
    } catch (error) {
        console.log('❌ error:', error);
    }
});
