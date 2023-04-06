const { StatusCodes } = require("http-status-codes");
const User = require("../models/userModel");
const cookieParser = require("cookie-parser");

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("Please provide name, email and password");
    }

    //password validation

    if (password.length < 6) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("Password must be at least 6 characters long");
    }

    const isExisting = await User.findOne({ email });

    if (isExisting) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    const token = await user.getSignedJwtToken();

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.CREATED).json({
        success: true,
        user: user,
        token,
    });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("Please provide email and password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("Invalid credentials");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("Invalid credentials");
    }

    const token = await user.getSignedJwtToken();

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.OK).json({
        user,
        token,
    });
};

//logout

const logout = async (req, res) => {
    res.cookie("token", "none", {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(StatusCodes.OK).json({
        success: true,
        data: {},
    });
};

module.exports = {
    login,
    register,
    logout,
};
