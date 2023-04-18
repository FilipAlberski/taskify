const Task = require("../models/taskModel");
const Project = require("../models/projectModel");
const User = require("../models/userModel");
const { checkPermission } = require("./utils/checkPermission");

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

//show all task that user has permission to see

exports.ShowPermittedTasks = async (req, res) => {
    const user = req.user;

    const projects = await Project.find({ members: user._id }).lean();
    const permittedTasks = [];

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const tasks = await Task.find({ project: project._id }).lean();

        for (let j = 0; j < tasks.length; j++) {
            const task = tasks[j];
            const hasPermission = checkPermission(user, project, task);

            if (hasPermission) {
                permittedTasks.push(task);
            }
        }
    }

    res.send(permittedTasks);
    // on front you have to filter task by date and if there is no any task you have to show message "No tasks"
};

//delete task

//show tasks by filter

//edit task
exports.editTask = async (req, res) => {};
