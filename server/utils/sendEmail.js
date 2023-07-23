import nodemailer from 'nodemailer';

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
transporter.set('debug', true);

const sendEmail = async ({ email, subject, message }) => {
  console.log(email, subject, message);
  const mailOptions = {
    from: 'filip.alberski@zoho.com',
    to: email,
    subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Error sending email');
  }
};

export default sendEmail;

// sendEmail({
//   email: 'alberskif@gmail.com',
//   subject: 'Test Email',
//   message: 'This is a test email from the backend',
// });
