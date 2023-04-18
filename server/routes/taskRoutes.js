const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.get(
    "/permitted-tasks",
    authMiddleware,
    taskController.ShowPermittedTasks
);
// Route for showing specific task
router.get("/:taskId", authMiddleware, taskController.showTask);
// Route for editing specific task
router.put("/:taskId", authMiddleware, taskController.editTask);

module.exports = router;
