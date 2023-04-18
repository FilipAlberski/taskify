const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Task = require("../models/taskModel");

async function firstStart() {
    try {
        console.log("Checking if the main project already exists");
        // Check if the main project already exists
        const existingProject = await Project.findOne({ name: "main" });
        if (!existingProject) {
            console.log("Main project does not exist, creating...");
            // Create the main project
            const mainProject = new Project({
                name: "main",
                description: "Default project",
                admin: [],
                members: [],
                tasks: [],
            });
            await mainProject.save();

            // Create the root user
            console.log("Root user created successfully");
            const rootUser = new User({
                email: "root@root.com",
                password: "rootroot",
                roles: [],
                name: "Root",
                projects: [mainProject._id],
                tasks: [],
                pageSettings: { theme: "light" },
            });
            await rootUser.save();

            // Add the root user as an administrator of the main project and the app
            console.log(
                "Adding root user as an administrator of the main project and the app"
            );
            mainProject.admin.push(rootUser._id);
            await mainProject.save();
            rootUser.roles.push("superAdmin");
            await rootUser.save();

            // Create some tasks for the main project
            console.log("Tasks created successfully for the main project");
            const task1 = new Task({
                name: "Task 1",
                description: "Description of task 1",
                assignedTo: rootUser._id,
                project: mainProject._id,
            });
            await task1.save();

            const task2 = new Task({
                name: "Task 2",
                description: "Description of task 2",
                assignedTo: rootUser._id,
                project: mainProject._id,
            });
            await task2.save();

            // Add the tasks to the main project
            console.log("Adding tasks to the main project");
            mainProject.tasks.addToSet(task1._id);
            mainProject.tasks.addToSet(task2._id);

            //add user to members of project
            mainProject.members.addToSet(rootUser._id);

            await mainProject.save();

            console.log("Default project created successfully");
            //add user to project
        } else {
            console.log("Default project already exists");
        }
    } catch (error) {
        console.error("Error creating default project", error);
    }
}

module.exports = firstStart;
