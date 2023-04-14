const Project = require("../models/projectModel");
const { checkPermission } = require("../controllers/utils/checkPermission");

const createProject = async (req, res) => {
    const { name, description, admin, memberEmails } = req.body;

    // Check if the user is a superadmin

    const user = req.user;

    const isSuperadmin = user.roles.includes("superAdmin");

    if (!isSuperadmin) {
        return res.status(401).send("Unauthorized");
    }

    try {
        // Find the user IDs for the given usernames or emails
        const memberIds = await User.find({
            email: { $in: memberEmails },
        }).select("_id");

        // Create new project
        const project = new Project({
            name,
            description,
            admin,
            members: memberIds,
            tasks: [],
        });

        // Save project to database
        await project.save();

        res.status(201).json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// show all projects res only name and ID

const showAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().select("name _id");
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Path: server/routes/projectRoutes.js

module.exports = { createProject, showAllProjects };
