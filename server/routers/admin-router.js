const express = require("express");
const router = express.Router();
const { login } = require("../controllers/admin-controller");
const validate = require("../middlewares/validate-middleware");
const { loginSchema } = require("../validators/admin-validator");

router.route("/").post(validate(loginSchema), );

router.route("/").post(validate(loginSchema), login);

module.exports = router;
