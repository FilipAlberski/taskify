const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async (url) => {
    let isConnected = false;
    while (!isConnected) {
        try {
            console.log("Connecting to database...");
            const connection = await mongoose.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Database connected");
            isConnected = true;
            return connection;
        } catch (error) {
            console.error(error);
            console.log("Retrying connection in 3 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 3000));
        }
    }
};

module.exports = connectDB;
