const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { transErrors, transSuccess, transMail } = require("../../lang/vi");
const emailService = require("../services/email.service");

let salt = bcrypt.genSaltSync(10);

let register = (data, protocol, host) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userByEmail = await UserModel.findByEmail(data.email);
      if (userByEmail) {
        if (userByEmail.deletedAt != null) {
          return resolve({
            message: transErrors.account_removed,
            success: false,
          });
        }
        if (!userByEmail.local.isActive) {
          return resolve({
            message: transErrors.account_not_active,
            success: false,
          });
        }
        return resolve({ message: transErrors.account_in_use, success: false });
      }

      let userItem = {
        username: data.email.split("@")[0],
        gender: data.gender,
        local: {
          email: data.email,
          password: bcrypt.hashSync(data.password, salt),
          verifyToken: uuidv4(),
        },
      };

      let user = await UserModel.createNew(userItem);
      let linkVerifyAccount = `${protocol}://${host}/verify-account?token=${user.local.verifyToken}`;

      emailService
        .sendMailVerifyAccount({
          productName: "Chitchat",
          username: user.username,
          linkVerifyAccount: linkVerifyAccount,
          receiverEmail: user.local.email,
        })
        .then((success) => {
          return resolve({
            success: true,
            message: transSuccess.userCreated(user.local.email),
          });
        })
        .catch(async (error) => {
          //remove user
          await UserModel.removeById(user._id);
          console.log(error);
          reject({ success: false, message: transMail.send_failed });
        });
    } catch (err) {
      reject(err);
    }
  });
};

let verifyAccount = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userByToken = await UserModel.findByToken(data.token);
      if (!userByToken) {
        return resolve({
          success: false,
          message: transErrors.token_undefined,
        });
      }
      await UserModel.verify(data.token);

      return resolve({
        message: transSuccess.account_actived,
        success: true,
      });
    } catch (err) {
      console.log("error", err);
      reject({ success: false, message: transErrors.server_error, error: err });
    }
  });
};

module.exports = { register, verifyAccount };
