const nodemailer = require("nodemailer");

const contact = (req, res, next) => {
  try {
    const { fullname, email, phoneNumber, message } = req.body;
    console.log("Req.body: ", req.body);
    const transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        // user: "anna.brekke@ethereal.email",
        // pass: "gu1J7bR5SKaSGBfyrv",
        user: "arpitaa0311@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const receiver = {
      // from: "anna.brekke@ethereal.email",
      from: "arpitaa0311@gmail.com",
      to: "arpitaa0311@gmail.com",
      subject: `New message from ${fullname}`,
      text: `New Message Received!\n\nName: ${fullname}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
      html: `<h1>New Message Received!</h1>
          <p>Name: ${fullname}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Message: ${message}</p>`,
    };
    const info = transporter.sendMail(receiver, (err, info) => {
      if (err) {
        console.error("Error while sending mail: ", err);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
    console.log("Email sent: ", info);
    // console.log("Message sent: %s", info.messageId);
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (e) {
    console.error("Error from contact controller: ", e);
    next(e);
  }
};

module.exports = contact;

// (error, emailResponse) => {
// if (error) {
// console.error("Email sending error: ", error);
// return res.status(500).json({ message: "Error while sending email!" });
// return;
// }
// console.log("Email sent successfully!");
// console.log("Email response: ", emailResponse);
// return res.status(200).json({ message: "Email sent successfully!" });
// }
