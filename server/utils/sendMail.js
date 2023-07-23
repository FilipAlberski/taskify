const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const options = {
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
};

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: options.user,
    pass: options.pass,
  },
});

async function sendEmail(recipient, subject, content) {
  try {
    await transporter.sendMail({
      from: options.user,
      to: recipient,
      subject: subject,
      html: content,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
