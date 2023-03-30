const Project = require("../models/projectModel");

const createProject = async (req, res) => {
    const { name, description, admin, memberEmails } = req.body;

    // Check if the user is a superadmin

    const user = req.user;

    const isSuperadmin = user.roles.includes("superAdmin");

    if (!isSuperadmin) {
        return res.status(401).send("Unauthorized");
    }

    try {
        // Find the user IDs for the given email addresses
        const memberIds = await Promise.all(
            memberEmails.map(async (email) => {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error(`User with email ${email} not found`);
                }
                return user._id;
            })
        );

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

// show all projects

const showAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().lean();

        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { createProject, showAllProjects };
