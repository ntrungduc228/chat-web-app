const UserModel = require("../models/user.model");
const RefreshTokenModel = require("../models/refreshToken.model");
const PasswordResetTokenModel = require("../models/passwordReset.model");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { transErrorsVi, transSuccessVi, transMailVi } = require("../../lang/vi");
const { transErrorsEn, transSuccessEn, transMailEn } = require("../../lang/en");
const emailService = require("../services/email.service");
const jwtHelper = require("../helpers/jwt");
const moment = require("moment");

let salt = bcrypt.genSaltSync(10);
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

let register = (data, protocol, host) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userByEmail = await UserModel.findByEmail(data.email);
      if (userByEmail) {
        if (userByEmail.deletedAt != null) {
          return resolve({
            message: transErrorsEn.account_removed,
            success: false,
          });
        }
        // if (!userByEmail.local.isActive) {
        //   return resolve({
        //     message: transErrorsEn.account_not_active,
        //     success: false,
        //   });
        // }
        return resolve({
          message: transErrorsEn.account_in_use,
          success: false,
        });
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
      // let linkVerifyAccount = `${protocol}://${host}/verify-account?token=${user.local.verifyToken}`;
      let REACT_APP_CLIENT_URL =
        process.env.REACT_APP_CLIENT_URL || "http://localhost:3000";
      let linkVerifyAccount = `${REACT_APP_CLIENT_URL}/verify-account?token=${user.local.verifyToken}&email=${user.local.email}`;

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
            message: transSuccessEn.userCreated(user.local.email),
          });
        })
        .catch(async (error) => {
          //remove user
          await UserModel.removeById(user._id);
          console.log(error);
          reject({ success: false, message: transMailEn.send_failed });
        });
    } catch (err) {
      reject(err);
    }
  });
};

let login = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await UserModel.findByEmail(data.email);
      if (!user) {
        return resolve({
          success: false,
          message: transErrorsEn.account_login_incorrect,
        });
      }

      if (!user.local.isActive) {
        return resolve({
          success: false,
          message: transErrorsEn.account_not_active,
        });
      }

      let checkPassword = await user.comparePassword(data.password);

      if (!checkPassword) {
        return resolve({
          success: false,
          message: transErrorsEn.account_login_incorrect,
        });
      }

      let userData = {
        _id: user._id,
        userName: user.userName,
        email: user.local.email,
        avatar: user.avatar,
      };

      let accessToken = await jwtHelper.generateToken(
        userData,
        accessTokenSecret,
        accessTokenLife
      );

      let refreshToken = await RefreshTokenModel.generate({
        _id: user._id,
        // email: user.email,
      });

      resolve({
        success: true,
        message: transSuccessEn.loginSuccess(user.username),
        token: { accessToken, refreshToken },
      });
    } catch (err) {
      console.log("error", err);
      reject({
        success: false,
        message: transErrorsVi.server_error,
        error: err,
      });
    }
  });
};

let verifyAccount = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.token) {
        return resolve({
          success: false,
          message: transErrorsEn.token_undefined,
        });
      }
      if (!data.email) {
        return resolve({
          success: false,
          message: transErrorsEn.email_not_found,
        });
      }

      let userByToken = await UserModel.findByToken(data.token, data.email);
      if (!userByToken) {
        return resolve({
          success: false,
          message: transErrorsEn.token_undefined,
        });
      }
      await UserModel.verify(data.token, data.email);

      return resolve({
        message: transSuccessEn.account_actived,
        success: true,
      });
    } catch (err) {
      console.log("error", err);
      reject({
        success: false,
        message: transErrorsEn.server_error,
        error: err,
      });
    }
  });
};

let verifyRFToken = async (refreshTokenFromClient) => {
  try {
    if (!refreshTokenFromClient) {
      return {
        checkRFToken: true,
        success: false,
        message: "Refresh token is missing!",
      };
    }

    let refreshTokenFromServer = await RefreshTokenModel.findByToken(
      refreshTokenFromClient
    );

    if (!refreshTokenFromServer) {
      return {
        checkRFToken: true,
        success: false,
        message: "Refresh token is not in database!",
      };
    }

    refreshTokenFromServer = refreshTokenFromServer.toObject();

    if (RefreshTokenModel.verifyExpiration(refreshTokenFromServer)) {
      RefreshTokenModel.removeById(refreshTokenFromServer._id);
      return {
        checkRFToken: true,
        success: false,
        message: "Refresh token was expired. Please make a new signin request",
      };
    }

    let user = await UserModel.findUserById(refreshTokenFromServer.userId);
    let newAccessToken = "";

    user = user ? user.toObject() : null;

    if (user) {
      let userData = {
        _id: user._id,
        userName: user.userName,
        email: user.local.email,
        avatar: user.avatar,
      };

      newAccessToken = await jwtHelper.generateToken(
        userData,
        accessTokenSecret,
        accessTokenLife
      );
    }

    return {
      success: true,
      checkRFToken: true,
      accessToken: newAccessToken,
      refreshToken: refreshTokenFromClient,
    };
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({
      success: false,
      message: transErrorsVi.server_error,
      error: err,
    });
  }
};

let sendPasswordResetLink = async (user, protocol, host) => {
  return new Promise(async (resolve, reject) => {
    try {
      let passwordResetObj = await PasswordResetTokenModel.generate(user);

      let linkResetPassword = `${protocol}://${host}/password-reset?resetToken=${passwordResetObj.resetToken}&email=${passwordResetObj.userEmail}`;

      emailService
        .sendPasswordResetLink({
          productName: "Chitchat",
          receiverEmail: user.local.email,
          linkResetPassword: linkResetPassword,
        })
        .then((success) => {
          // console.log("sucess", success);
          return resolve({
            success: true,
            message: transSuccessVi.send_reset_password_success,
          });
        });
    } catch (err) {
      console.log(err);
      reject({ success: false, message: transMailVi.send_failed });
    }
  });
};

let resetPassword = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { resetToken, email } = data;
      if (!resetToken) {
        return resolve({ success: false, message: "Missing token reset" });
      }

      const resetTokenObject = await PasswordResetTokenModel.findOneAndRemove({
        userEmail: email,
        resetToken,
      });
      // console.log("resetToken", resetTokenObject);

      if (!resetTokenObject) {
        return resolve({
          success: false,
          message: "Cannot find matching reset token",
        });
      }

      if (moment().isAfter(resetTokenObject.expires)) {
        return resolve({ success: false, message: "Reset token is expired" });
      }

      let user = await UserModel.findByEmail(resetTokenObject.userEmail);
      if (!user) {
        return resolve({
          success: false,
          message: transErrorsVi.account_undefined,
        });
      }

      user.local.password = bcrypt.hashSync(data.password, salt);
      await user.save();

      resolve({ message: transSuccessVi.user_password_updated, success: true });
    } catch (err) {
      console.log(err);
      reject({ success: false, message: transErrorsVi.server_error });
    }
  });
};

module.exports = {
  register,
  verifyAccount,
  login,
  verifyRFToken,
  sendPasswordResetLink,
  resetPassword,
};
