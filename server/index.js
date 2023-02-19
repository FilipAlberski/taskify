const express = require("express");
const dotenv = require("dotenv").config();

//connectDB

const connectDB = require("./db/connectDB");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        console.log("Connecting to database...");
        const connection = await connectDB(process.env.MONGO_URI);
        if (connection) {
            console.log("Database connected");
        }
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
