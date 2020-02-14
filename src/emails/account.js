const nodemailer = require('nodemailer');

const mail = async (email, name, action) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        }
      });

    switch (action) {
        case 'greeting':
            await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: email,
                subject: 'Thanks for joining in!',
                text: `Welcome to the app, ${name}.`,
            }); 
            break;
        case 'farewell':
            await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: email,
                subject: 'Sorry to see you go!',
                text: `Goodbye ${name}. I hope to see you back sometime soon.`,
            });
            break;
    }
}

module.exports = mail