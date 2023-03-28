const Project = require("../../models/projectModel");

async function createDefaultProject() {
    try {
        const existingProject = await Project.findOne({ name: "main" });
        if (!existingProject) {
            const newProject = new Project({
                name: "main",
                description: "Default project",
                admin: [],
                members: [],
                tasks: [],
            });
            await newProject.save();
            console.log("Default project created successfully");
        } else {
            console.log("Default project already exists");
        }
    } catch (error) {
        console.error("Error creating default project", error);
    }
}

module.exports = createDefaultProject;
