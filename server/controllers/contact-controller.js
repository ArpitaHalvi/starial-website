const Contact = require("../models/contact-model");

const contact = async (req, res, next) => {
  try {
    const userdata = req.body;
    const contact = await Contact.create(userdata);
    if (!contact)
      return res.status(500).json({ message: "Message not delivered." });
    console.log("Contact sent successfully.");
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (e) {
    console.error("Error from contact controller: ", e);
    next(e);
  }
};

module.exports = contact;
