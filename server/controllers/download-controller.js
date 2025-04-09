const { Resend } = require("resend");
const nodemailer = require("nodemailer");
const msg91 = require("msg91").default;

const sendWhatsappMsg = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    console.log("Phone number: ", phoneNumber, "Req.body", req.body);
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    // const client = require("twilio")(accountSid, authToken);
    // const response = await client.messages
    //   .create({
    //     from: "whatsapp:+14155238886",
    //     contentSid: process.env.CONTENT_SID,
    //     body: "This is your download link  for:                                                   Play Store: https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1                                                 App Store: https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1",
    //     to: `whatsapp:+91${phoneNumber}`,
    //     // to: `whatsapp:+918349920270`,
    //   })
    //   .then((message) => console.log("Message sent successfully!", message.sid))
    //   .catch((e) => console.error("Error while sending whatsapp  message.", e));

    // SENDING SMS
    // const client = require("twilio")(accountSid, authToken);
    // const response = client.messages
    //   .create({
    //     body: "This is the Starial App Download Link: https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1",
    //     from: "+15679983492",
    //     to: `+91${phoneNumber}`,
    //   })
    //   .then((message) => console.log(message.sid));
    // if (!response) {
    //   console.error("Error occured while sending whatsapp message.");
    //   return res
    //     .status(500)
    //     .json({ message: "Error occured while sending whatsapp message." });
    // }
    // return res.status(200).json({ message: "Message sent successfully." });

    // USING MSG91 FOR SENDING DOWNLOAD LINK
    msg91.initialize({ authKey: "" });
    let sms = msg91.getSMS();
    sms.send("flowId", { mobile: "" });
  } catch (e) {
    console.error("Error: ", e);
    next(e);
  }
};

const sendEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("Req.body: ", req.body);
    // const resend = new Resend(process.env.RESEND_API_KEY);

    // const emailSent = resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: email,
    //   subject: "Starial App Download Link",
    //   html: `<p>Hello,</p>
    //   <p>You recently requested the download link for our app.</p>
    //   <p>Click the button below to download it now.</p>
    //   <br>
    //   <p>
    //   <a href="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color:#49c6f8; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;margin-right: 2rem;">PlayStore Link</a>
    //   <a href="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color:#49c6f8; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;">AppStore Link</a>
    //   </p>
    //   <br>
    //   <p>If you didn't request this, you can ignore this email.</p>
    //   <p>Best regards,<br>Starial</p>`,
    // });
    // if (emailSent) {
    //   return res.status(200).json({ message: "Email sent successfully!" });
    // } else {
    //   return res.status(500).json({ message: "Unable to send email." });
    // }

    // GMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "starialofficial@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const receiver = {
      // from: "starialofficial@gmail.com",
      from: "starialofficial@gmail.com",
      to: email,
      subject: `Starial App Download Link`,
      html: `<p>Hello,</p>
      <p>You recently requested the download link for our app.</p>
      <p>Click the button below to download it now.</p>
      <br>
      <p>
      <a href="https://play.google.com/store/apps/details?id=com.starial.stationery&hl=en-US&pli=1" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color:#49c6f8; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;margin-right: 2rem;">PlayStore Link</a>
      <a href="https://apps.apple.com/us/app/starial-stationery-uniform/id6477531287" style="padding: 0.6rem 1rem; border-radius: 5px; border: none; background-color:#49c6f8; text-decoration:none; color: black;font-family: 'Segoe UI'; font-size: 1rem;">AppStore Link</a>
      </p>
      <br>
      <p>If you didn't request this, you can ignore this email.</p>
      <p>Best regards,<br>Starial</p>`,
    };
    transporter.sendMail(receiver, (err, info) => {
      if (err) {
        console.error("Error while sending mail: ", err);
        return res.status(500).json({ message: "Error while sending email." });
      } else {
        console.log("Email sent: ", info.response);
        return res.status(200).json({ message: "Email sent successfully." });
      }
    });
  } catch (e) {
    console.error("Error while sending email: ", e.message);
    next(e);
  }
};

module.exports = { sendEmail, sendWhatsappMsg };
