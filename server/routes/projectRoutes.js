const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

// Route for creating a new project
router.post("/createproject", projectController.createProject);

module.exports = router;
