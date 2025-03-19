const express = require("express");
const { signUp, login, user } = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/user").get(authMiddleware, user);

module.exports = router;
