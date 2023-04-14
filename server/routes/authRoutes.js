const express = require("express");
const router = express.Router();
const {
    login,
    register,
    logout,
    showAllUsers,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware.js");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").get(logout);
router.route("/show-all-users").get(authMiddleware, showAllUsers);

//test protected route
router.route("/test").get(authMiddleware, (req, res) => {
    res.send("You are authorized");
});

module.exports = router;
