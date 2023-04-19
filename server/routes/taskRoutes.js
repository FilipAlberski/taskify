const express = require("express");
const router = express.Router();
const {
    showTask,
    ShowPermittedTasks,
    editTask,
    showFilteredTasks,
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/permitted-tasks", authMiddleware, ShowPermittedTasks);
router.get("/filtered", authMiddleware, showFilteredTasks);
// Route for showing specific task
router.get("/:taskId", authMiddleware, showTask);
// Route for editing specific task
router.put("/:taskId", authMiddleware, editTask);

module.exports = router;
