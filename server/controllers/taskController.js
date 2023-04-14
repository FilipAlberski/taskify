const Task = require("../models/taskModel");
const Project = require("../models/projectModel");
const User = require("../models/userModel");
const { checkPermission } = require("../controllers/utils/checkPermission");

//permissions check

// Show specific task
exports.showTask = async (req, res) => {
    const { taskId } = req.params;

    const task = await Task.findOne({ taskId }).lean();

    if (!task) {
        return res.status(404).send("Task not found");
    }

    const project = await Project.findOne({ _id: task.project }).lean();

    // Check if the user has permission to view the task
    const user = req.user;
    const hasPermission = checkPermission(user, project, task);

    if (!hasPermission) {
        return res.status(401).send("Unauthorized");
    }

    const assingedUser = await User.findOne({ _id: task.assignedTo }).lean();
    task.assignedTo = assingedUser;

    res.send(task);
};

//delete task

//show tasks by filter

//edit task
exports.editTask = async (req, res) => {};
