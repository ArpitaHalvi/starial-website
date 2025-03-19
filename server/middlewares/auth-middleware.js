const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided." });
  }
  const jwtToken = token.replace("Bearer ", "").trim();
  console.log("JET TOKEN: ", jwtToken);
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log("Verified User data: ", userData);
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
  } catch (e) {
    console.error("Error in auth middleware: ", e);
    next(e);
  }
};

module.exports = authMiddleware;
