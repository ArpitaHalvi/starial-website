const express = require("express");
const contact = require("../controllers/contact-controller");
const router = express.Router();

router.route("/").post(contact);

module.exports = router;
