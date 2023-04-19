const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
    {
        taskId: {
            type: String,
            unique: true,
        },
        name: {
            type: String,
            maxLength: [50, "Task name must be at most 50 characters long"],
            trim: true,
        },
        description: {
            type: String,
            maxLength: [
                200,
                "Task description must be at most 200 characters long",
            ],
            trim: true,
        },
        status: {
            type: String,
            enum: ["to do", "in progress", "done"],
            default: "to do",
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        coworkers: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        comments: [
            {
                text: {
                    type: String,
                    required: true,
                },
                author: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
                files: [
                    {
                        type: String, // stores file paths
                    },
                ],
            },
        ],
    },
    { timestamps: true }
);

TaskSchema.pre("save", async function (next) {
    const task = this;
    const project = await mongoose.model("Project").findById(task.project);
    if (!project) {
        return next(new Error("Project not found"));
    }
    const tasksInProject = await mongoose
        .model("Task")
        .countDocuments({ project: project._id });
    task.taskId = `${project.name}-${tasksInProject + 1}`;
    next();
});

module.exports = mongoose.model("Task", TaskSchema);
