const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async (url) => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB", err);
        });
};

module.exports = connectDB;
