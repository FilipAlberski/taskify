const Dashboard = require("../models/dashboardModel");

const addDashboard = async (req, res) => {
    try {
        const dashboard = new Dashboard({
            name: req.body.name,
            createdBy: req.user._id, // assuming the authenticated user is stored in the req.user object
            showOnSidebar: req.body.showOnSidebar,
            isPrivate: req.body.isPrivate,
            querySettings: req.body.querySettings,
        });
        await dashboard.save();
        res.status(201).json(dashboard);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateDashboard = async (req, res) => {
    try {
        const dashboard = await Dashboard.findOne({
            _id: req.params.id,
            createdBy: req.user._id, // ensure that the dashboard belongs to the authenticated user
        });
        if (!dashboard) {
            return res.status(404).json({ message: "Dashboard not found" });
        }
        dashboard.name = req.body.name;
        dashboard.showOnSidebar = req.body.showOnSidebar;
        dashboard.isPrivate = req.body.isPrivate;
        dashboard.querySettings = req.body.querySettings;
        dashboard.updatedAt = Date.now();
        await dashboard.save();
        res.json(dashboard);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteDashboard = async (req, res) => {
    try {
        const dashboard = await Dashboard.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id, // ensure that the dashboard belongs to the authenticated user
        });
        if (!dashboard) {
            return res.status(404).json({ message: "Dashboard not found" });
        }
        res.json({ message: "Dashboard deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    addDashboard,
    updateDashboard,
    deleteDashboard,
};
