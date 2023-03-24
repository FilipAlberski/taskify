require("express-async-errors");
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandlerMiddleware = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");
const notFoundMiddleware = require("./middleware/notFound");
const cors = require("cors");
const morgan = require("morgan");

//connectDB

const connectDB = require("./db/connectDB");

//app

const app = express();

//middleware

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors());

app.get("/api/v1/apitest", (req, res) => {
    res.status(200).json({ message: "API is working" });
});

//routes

app.use("/api/v1/auth", authRoutes);

//error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        const connection = await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
