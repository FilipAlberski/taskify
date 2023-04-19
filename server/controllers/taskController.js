const Task = require("../models/taskModel");
const Project = require("../models/projectModel");
const User = require("../models/userModel");
const { checkPermission } = require("./utils/checkPermission");

//permissions check

// Show specific task
showTask = async (req, res) => {
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

ShowPermittedTasks = async (req, res) => {
    try {
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

        if (permittedTasks.length === 0) {
            res.send("No tasks");
        } else {
            res.send(permittedTasks);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};
//delete task

//show tasks by filter

//edit task
editTask = async (req, res) => {};

showFilteredTasks = async (req, res) => {
    try {
        const user = req.user;

        const projects = await Project.find({ members: user._id }).lean();
        const permittedTasks = [];

        const { project, assignedTo, status, from, to, search } = req.query;

        for (let i = 0; i < projects.length; i++) {
            const projectObj = projects[i];

            // If project filter is specified and current project doesn't match, skip to next iteration
            if (project && !projectObj._id.equals(project)) {
                continue;
            }

            const tasks = await Task.find({ project: projectObj._id }).lean();

            for (let j = 0; j < tasks.length; j++) {
                const task = tasks[j];

                // Check permission
                const hasPermission = checkPermission(user, projectObj, task);
                if (!hasPermission) {
                    continue;
                }

                // If assignedTo filter is specified and current task doesn't match, skip to next iteration
                if (assignedTo && !task.assignedTo.equals(assignedTo)) {
                    continue;
                }

                // If status filter is specified and current task doesn't match, skip to next iteration
                if (status && task.status !== status) {
                    continue;
                }

                // If from filter is specified and current task creation date is before from date, skip to next iteration
                if (from && task.createdAt < new Date(from)) {
                    continue;
                }

                // If to filter is specified and current task creation date is after to date, skip to next iteration
                if (to && task.createdAt > new Date(to)) {
                    continue;
                }

                // If search filter is specified and current task doesn't match, skip to next iteration
                if (
                    search &&
                    !(
                        task.name.includes(search) ||
                        task.description.includes(search)
                    )
                ) {
                    continue;
                }

                permittedTasks.push(task);
            }
        }

        if (permittedTasks.length === 0) {
            res.send("No tasks");
        } else {
            res.send(permittedTasks);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

//export

module.exports = {
    showTask,
    ShowPermittedTasks,
    editTask,
    showFilteredTasks,
};
