const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true, unique: true },
  message: { type: String, required: true },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
