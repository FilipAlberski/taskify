const Task = require("../models/taskModel");
const Project = require("../models/projectModel");

exports.showTask = async (req, res) => {
    const task = await Task.findById(req.params.taskId).populate("project");

    if (!task) {
        return res.status(404).send("Task not found");
    }

    const project = task.project;

    // Check if the user is a superadmin, a member of the project, or a coworker
    const user = req.user; // Assumes the user has been authenticated and the user object is available in the request

    const isSuperadmin = user.role === "superadmin";
    const isMember = project.members.includes(user._id);
    const isCoworker = project.coworkers.includes(user._id);

    if (!isSuperadmin && !isMember && !isCoworker) {
        return res.status(401).send("Unauthorized");
    }

    res.send(task);
};
