import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "Gmail", // or use another service like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password
  },
});

export const sendMail = async (to, subject, text, html) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL, // Sender email address
      to, // Recipient
      subject, // Subject line
      text, // Plain text body
      html, // HTML body
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};