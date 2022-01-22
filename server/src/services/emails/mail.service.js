const nodemailer = require("nodemailer");
const Email = require("email-templates");

let sendMailVerifyAccount = () => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  const email = new Email({
    views: { root: __dirname },
    message: {
      from: "abcdatdediia@gmail.com",
    },
    // uncomment below to send emails in development/test env:
    // send: true
    transport: transporter,
    // views: {
    //   root: "./emails",
    //   options: {
    //     extension: "ejs", // <---- HERE
    //   },
    // },
  });

  email
    .send({
      template: "test",
      message: {
        to: "mymemory2409@gmail.com",
      },
      locals: {
        name: "Elon kia kia",
        productName: "Ahoo Chat",
      },
    })
    .then(async (res) => {
      console.log("dir", __dirname);
      console.log("res.originalMessage", res);
      await transporter.sendMail(res.originalMessage);
    })
    .catch((error) => {
      console.log("error sending password reset email");
      console.log(error);
    });
};

module.exports = { sendMailVerifyAccount };
