const nodemailer = require("nodemailer");

const contact = async (req, res, next) => {
  try {
    const { fullname, email, phoneNumber, message } = req.body;
    console.log("Req.body: ", req.body);
    const auth = nodemailer.createTransport({
      service: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "birdie0@ethereal.email",
        pass: "qbEuTsArTnd4pumyR2",
      },
    });
    const receiver = {
      from: "birdie0@ethereal.email",
      to: "arpitaa0311@gmail.com",
      subject: `New message from ${fullname}`,
      text: `New Message Received!\n\nName: ${fullname}\Email: ${email}\Phone Number: ${phoneNumber}\Message: ${message}`,
      html: `<h1>New Message Received!</h1>
          <p>Name: ${fullname}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Message: ${message}</p>`,
    };
    const info = await auth.sendMail(receiver);
    console.log("Message sent: %s", info.messageId);
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
