const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const cookieParser = require("cookie-parser");

const authMiddleware = async (req, res, next) => {
    try {
        // Parse cookies
        cookieParser()(req, res, () => {});

        //take token from cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //find user by id
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        //add user to req
        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = authMiddleware;
