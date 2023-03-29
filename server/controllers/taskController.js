const Task = require("../models/taskModel");
const Project = require("../models/projectModel");

// Show specific task
exports.showTask = async (req, res) => {
    const { taskId } = req.params;

    const task = await Task.findOne({ taskId }).lean();

    if (!task) {
        return res.status(404).send("Task not found");
    }

    const project = await Project.findOne({ _id: task.project }).lean();

    // Check if the user is a superadmin, a member of the project, or a coworker
    const user = req.user;

    const isSuperadmin = user.roles.includes("superAdmin");
    const isMember = user._id in project.members;
    const isCoworker = user._id in task.coworkers;

    if (!isSuperadmin && !isMember && !isCoworker) {
        return res.status(401).send("Unauthorized");
    }

    res.send(task);
};

//edit task
exports.editTask = async (req, res) => {
    console.log("task edit");
    res.send("task edit");
};
