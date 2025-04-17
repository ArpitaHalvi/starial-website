const fs = require("fs");
const cloudinary = require("../cloudinary/cloudinaryConfig");
const Applicant = require("../models/applicant-model");

const newApplicant = async (req, res, next) => {
  try {
    const { fullname, email, phone, portfolio, role } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file provided for upload." });
    }
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Applicant's Resumes",
      resource_type: "raw",
    });
    if (!result.secure_url || !result.public_id) {
      return res.status(500).json({ message: "Cloudinary upload failed." });
    }
    try {
      fs.unlinkSync(req.file.path);
    } catch (e) {
      console.error("Error while deleting file: ", e);
    }
    const applicant = await Applicant.create({
      fullname: fullname,
      email: email,
      phone: phone,
      resumeLink: result.secure_url,
      resumePublicId: result.public_id,
      portfolio: portfolio,
      role: role,
    });
    if (!applicant) {
      console.error("Unable to send application.");
      return res.status(500).json({ message: "Unable to send application." });
    }
    console.log("Added applicant successfully.");
    return res.status(201).json({ message: "Application sent successfully." });
  } catch (e) {
    console.error("Unable to send application.");
    next(e);
  }
};

module.exports = { newApplicant };
