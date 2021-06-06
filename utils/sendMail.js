const nodemailer = require('nodemailer');

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'phuteobs0166@gmail.com',
      pass: 'phuteobs0166'
    }
  });

  const message = {
    from: 'phuteobs0166@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  const info = await transporter.sendMail(message);
}

module.exports = sendMail;