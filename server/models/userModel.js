const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: "Email is not valid",
            },
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minLength: [6, "Password must be at least 6 characters long"],
            select: false,
        },
        roles: {
            type: [String],
            enum: ["superAdmin", "user"],
            default: ["user"],
        },
        name: {
            type: String,
            required: [true, "Please enter your name"],
            minLength: [3, "Name must be at least 3 characters long"],
            maxLength: [20, "Name must be at most 20 characters long"],
            trim: true,
        },
        lastName: {
            type: String,
            minLength: [3, "Last name must be at least 3 characters long"],
            default: "lastname",
        },
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Project",
                default: ["main"], // set default project ID to "main"
            },
        ],
        tasks: [
            {
                type: Schema.Types.ObjectId,
                ref: "Task",
            },
        ],
        pageSettings: {
            theme: {
                type: String,
                enum: ["light", "dark"],
                default: "light",
            },
        },
    },
    { timestamps: true }
);

UserSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
