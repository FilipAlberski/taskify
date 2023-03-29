const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// Route for showing specific task
router.get("/:taskId", authMiddleware, taskController.showTask);
// Route for editing specific task
router.put("/:taskId", authMiddleware, taskController.editTask);

module.exports = router;
