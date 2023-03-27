const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a project name"],
            maxLength: [10, "Project name must be at most 10 characters long"],
            trim: true,
        },
        description: {
            type: String,
            maxLength: [
                200,
                "Project description must be at most 200 characters long",
            ],
            trim: true,
        },
        admin: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        members: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        tasks: [
            {
                type: Schema.Types.ObjectId,
                ref: "Task",
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
