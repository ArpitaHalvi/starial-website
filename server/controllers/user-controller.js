const User = require("../models/user-model");

const signUp = async (req, res, next) => {
  try {
    const { email, phoneNumber, password } = req.body;
    
    console.log("User signup successfully.");
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const user = req.body;
  } catch (e) {
    next(e);
  }
};

module.exports = { signUp, login };
