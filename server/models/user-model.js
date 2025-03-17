const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  address: { type: [String] },
  city: { type: String },
  pincode: { type: Number },
});

const User = model("User", userSchema);

module.exports = User;
