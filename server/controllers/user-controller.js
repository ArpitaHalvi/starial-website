const User = require("../models/user-model");

const signUp = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists)
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    const signedUpUser = await User.create({ fullname, email, password });
    if (!signedUpUser)
      return res.status(500).json({ message: "Error while signing up." });
    console.log("User signup successfully.");
    return res.status(201).json({
      message: "Sign Up successfully.",
      token: signedUpUser.generateToken(),
      userId: signedUpUser._id.toString(),
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const userExists = await User.findOne({ email });
    if (userExists) {
      const loggedInUser = await userExists.comparePassword(password);
      if (loggedInUser) {
        res.status(200).json({
          message: "Logged in sucessfully!",
          token: userExists.generateToken(),
          userId: userExists._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Invalid Email or Password!" });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials." });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { signUp, login };
