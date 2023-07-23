import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({
  path: '../../.env',
});

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

const sendEmail = async ({ email, subject, message }) => {
  console.log(process.env.MAIL_USER);
  const mailOptions = {
    from: 'filip.alberski@zoho.com',
    to: email,
    subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(error);
  }
};

export default sendEmail;

// sendEmail({
//   email: 'alberskif@gmail.com',
//   subject: 'Test Email',
//   message: 'This is a test email from the backend',
// });
