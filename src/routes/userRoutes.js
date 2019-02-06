const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const staticController = require("../controllers/staticController")
const validation = require("./validation");

router.get("/", staticController.landing);
router.get("/sign_up", userController.signUp);
router.post("/user", validation.validateUsers, userController.create);
router.get("/sign_in_form", userController.signInForm);
router.post("/signIn", validation.validateSignIn, userController.signIn);
router.get("/sign_out", userController.signOut);

module.exports = router;