const nodemailer = require("nodemailer");
const { getBodyHTMLEmail } = require("./emails/verifyEmail/verifyEmail");
const Email = require("email-templates");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_APP, // generated ethereal user
    pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
  },
});

let sendMailVerify = async (data) => {
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Duc Nguyen 👻" <mymemory2409@gmail.com>', // sender address
    to: data.receiverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    html: getBodyHTMLEmail(data),
  });
};

let sendMailVerifyAccount = (data) => {
  return new Promise((resolve, reject) => {
    const email = new Email({
      views: {
        root: __dirname + "/emails",
        options: {
          extension: "ejs", // <---- HERE
        },
      },
      message: {
        from: "Chitchat chitchat.support@gmail.com",
      },
      preview: false,
      // uncomment below to send emails in development/test env:
      // send: true
      transport: transporter,
    });

    email
      .send({
        template: "verifyAccount",
        message: {
          to: data.receiverEmail,
        },
        locals: {
          username: data.username,
          productName: data.productName,
          receiverEmail: data.receiverEmail,
          linkVerifyAccount: data.linkVerifyAccount,
        },
      })
      .then(async (res) => {
        // console.log("res.originalMessage", res.originalMessage);
        await transporter.sendMail(res.originalMessage);
        return resolve(true);
      })
      .catch((err) => {
        console.log("error sending password reset email", err);
        reject(err);
      });
  });
};

let sendPasswordResetLink = (data) => {
  return new Promise(async (resolve, reject) => {
    const email = new Email({
      views: {
        root: __dirname + "/emails",
        options: {
          extension: "ejs", // <---- HERE
        },
      },
      message: {
        from: "Chitchat chitchat.support@gmail.com",
      },
      preview: false,
      // uncomment below to send emails in development/test env:
      // send: true
      transport: transporter,
    });

    email
      .send({
        template: "passwordReset",
        message: {
          to: data.receiverEmail,
        },
        locals: {
          productName: data.productName,
          receiverEmail: data.receiverEmail,
          linkResetPassword: data.linkResetPassword,
        },
      })
      .then(async (res) => {
        // console.log("res.originalMessage", res.originalMessage);
        await transporter.sendMail(res.originalMessage);
        return resolve(true);
      })
      .catch((err) => {
        console.log("error sending password reset email", err);
        reject(err);
      });
  });
};

module.exports = {
  sendMailVerify,
  sendMailVerifyAccount,
  sendPasswordResetLink,
};
