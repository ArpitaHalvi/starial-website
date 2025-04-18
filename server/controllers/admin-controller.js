// const Admin = require("../models/admin-model");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  function generateToken() {
    try {
      return jwt.sign(
        {
          email: this.email,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "4h",
        }
      );
    } catch (e) {
      console.error("Error while generating token");
    }
  }
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return res.status(200).json({
        message: "Successfully logged in!",
        token: generateToken(),
        email: email,
      });
    } else {
      return res.status(500).json("Invalid credentials.");
    }
  } catch (e) {
    console.error("Error while logging in!");
    next(e);
  }
};

module.exports = { login };
