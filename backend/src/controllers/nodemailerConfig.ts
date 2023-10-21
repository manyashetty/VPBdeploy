import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'taniyashetty54321@gmail.com',
    pass: 'Password',
  },
});

export default transporter;
