require("express-async-errors");
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandlerMiddleware = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");
const notFoundMiddleware = require("./middleware/notFound");
const cors = require("cors");

//connectDB

const connectDB = require("./db/connectDB");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/api/v1/", (req, res) => {
    res.send("Hello World");
});

//routes

app.use("/api/v1/auth", authRoutes);

//error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
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
