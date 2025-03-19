const { Schema, model } = require("mongoose");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  fullname: { type: String, required: [true, "Enter your fullname."] },
  email: {
    type: String,
    required: [true, "Enter your email first."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password required."],
    unique: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  // Check if the password is modified
  if (!user.isModified("password")) {
    next();
  }
  try {
    const hashedPassword = await argon2.hash(user.password);
    user.password = hashedPassword;
  } catch (e) {
    next(e);
  }
});

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
  } catch (e) {
    console.error("Error: ", e);
  }
};

userSchema.methods.comparePassword = function (password) {
  return argon2.verify(this.password, password);
};

const User = model("User", userSchema);

module.exports = User;
