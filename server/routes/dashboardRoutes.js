const express = require("express");
const router = express.Router();
const {
    addDashboard,
    updateDashboard,

    deleteDashboard,
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware.js");

router.route("/addDashboard").post(authMiddleware, addDashboard);
router.route("/updateDashboard").put(authMiddleware, updateDashboard);
router.route("/deleteDashboard").delete(authMiddleware, deleteDashboard);

module.exports = router;
