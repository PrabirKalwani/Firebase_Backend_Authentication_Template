const express = require("express");
const router = express.Router();
const firebaseAuthController = require("../controllers/firebase-auth-controller.js");
const verifyToken = require("../middleware/index.js");
const cvController = require("../controllers/cv-controller.js");
const projectSuggestionController = require("../controllers/projectSuggestion-controller.js");
const githubProjectsController = require("../controllers/githubProjects-controller.js");

// Auth routes
router.post("/api/register", firebaseAuthController.registerUser);
router.post("/api/login", firebaseAuthController.loginUser);
router.post("/api/logout", firebaseAuthController.logoutUser);
router.post("/api/reset-password", firebaseAuthController.resetPassword);

// Protected route example
router.get("/api/posts", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route" });
});

module.exports = router;
