const express = require("express");
const { signUp, login, user } = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const { signUpSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const router = express.Router();

router.route("/signup").post(validate(signUpSchema), signUp);
router.route("/login").post(validate(loginSchema), login);
router.route("/user").get(authMiddleware, user);

module.exports = router;
