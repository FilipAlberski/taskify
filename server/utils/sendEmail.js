import nodemailer from 'nodemailer';
import asyncHandler from 'express-async-handler';

const sendEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: subject,
      text: text,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);

    throw new Error('Email could not be sent');
  }
};

export default sendEmail;
