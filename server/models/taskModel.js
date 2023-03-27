const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
    {
        taskId: {
            type: String,
            required: true,
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
        },
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

// Add a pre-save hook to generate the task ID based on the project name and the number of tasks in the project
TaskSchema.pre("save", async function (next) {
    const task = this;
    const project = await mongoose.model("Project").findById(task.project);
    if (!project) {
        return next(new Error("Project not found"));
    }
    const taskId = `${project.name}-${project.tasks.length + 1}`;
    task.taskId = taskId;
    next();
});

//export

module.exports = mongoose.model("Task", TaskSchema);
