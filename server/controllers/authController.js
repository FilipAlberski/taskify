const { StatusCodes } = require("http-status-codes");
const User = require("../models/userModel");

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new Error("Please provide name, email and password");
    }

    const isExisting = await User.findOne({ email });

    if (isExisting) {
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    res.status(StatusCodes.CREATED).json({
        success: true,
        data: user,
    });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("Please provide an email and password");
    }
};

module.exports = {
    login,
    register,
};