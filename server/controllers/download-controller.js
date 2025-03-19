const nodemailer = require("nodemailer");

const sendWhatsappMsg = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    console.log("Phone number: ", phoneNumber, "Req.body", req.body);
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);
    const response = await client.messages
      .create({
        from: "whatsapp:+14155238886",
        contentSid: process.env.CONTENT_SID,
        body: "This is your download link  for:                                                   Play Store: https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1                                                 App Store: https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1",
        to: `whatsapp:+91${phoneNumber}`,
        // to: `whatsapp:+918349920270`,
      })
      .then((message) => console.log("Message sent successfully!", message.sid))
      .catch((e) => console.error("Error while sending whatsapp  message.", e));
    if (!response) {
      console.error("Error occured while sending whatsapp message.");
      return res
        .status(500)
        .json({ message: "Error occured while sending whatsapp message." });
    }
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (e) {
    console.error("Error: ", e);
    next(e);
  }
};

const sendEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("Req.body: ", req.body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "arpitaa0311@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const receiver = {
      from: "arpitaa0311@gmail.com",
      to: email,
      subject: "STARIAL APP DOWNLOAD LINK",
      text: "Hello,\nYou recently requested the download link for our app.\n\nClick the link bwlow to download it now:\n Play Store Link: https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1\nApp Store Link: \n\nIf you didn't request this, you can ignore this email.\n\nBest regards,\n Starial",
      html: `<p>Hello,</p>
      <p>You recently requested the download link for our app.</p>
      <p>Click the button below to download it now.</p>
      <br>
      <p>
      <a href="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color: #00b7ff; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;margin-right: 2rem;">PlayStore Link</a>
      <a href="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color: #00b7ff; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;">AppStore Link</a>
      </p>
      <br>
      <p>If you didn't request this, you can ignore this email.</p>
      <p>Best regards,<br>Starial</p>`,
    };
    transporter.sendMail(receiver, (error, response) => {
      if (error) {
        console.error("Email sending error: ", error);
        return res.status(500).json({ message: "Error while sending email!" });
      } else {
        console.log("Email sent successfully!", response.response);
        // console.log("Email response: ", emailResponse);
        return res.status(200).json({ message: "Email sent successfully!" });
      }
    });
  } catch (e) {
    console.error("Error while sending email: ", e.message);
    next(e);
  }
};

module.exports = { sendEmail, sendWhatsappMsg };
