const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
