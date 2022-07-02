const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL_ID,
    pass: process.env.SENDER_EMAIL_PASS,
  },
});

const mailOptions = {
  from: "prjjwlbhatt@gmail.com",
  to: "iit2020161@iiita.ac.in,prjjwlbhatt@gmail.com",
  subject: "Hello! This is a test mail's Subject",
  text: "This is the body of email",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent : ", info.response);
  }
});
