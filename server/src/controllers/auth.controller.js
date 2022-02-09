const { transSuccessVi, transErrorsVi } = require("../../lang/vi");
const { validationResult } = require("express-validator");
const emailService = require("../services/email.service");
const authService = require("../services/auth.service");
const UserModel = require("../models/user.model");

let register = async (req, res) => {
  let errorArr = [];
  let validationErr = validationResult(req);
  if (!validationErr.isEmpty()) {
    let errors = Object.values(validationErr.mapped());
    errors.forEach((item) => {
      errorArr.push(item.msg);
    });

    return res.status(200).json({ success: false, message: errorArr });
  }
  try {
    let newUser = await authService.register(
      req.body,
      req.protocol,
      req.get("host")
    );
    return res.status(200).json(newUser);
  } catch (err) {
    console.log("err", err);
    return res
      .status(500)
      .send({ success: false, message: transErrorsVi.server_error, err: err });
  }
};

let verifyAccount = async (req, res) => {
  let result = await authService.verifyAccount(req.body);
  return res.status(200).json(result);
};

let login = async (req, res) => {
  try {
    let errorArr = [];
    let validationErr = validationResult(req);
    if (!validationErr.isEmpty()) {
      let errors = Object.values(validationErr.mapped());
      errors.forEach((item) => {
        errorArr.push(item.msg);
      });

      return res.status(401).send({ success: false, message: errorArr });
    }
    let data = await authService.login(req.body);
    return res.status(200).json(data);
  } catch (err) {
    console.log("err", err);
    return res
      .status(500)
      .send({ success: false, message: transErrorsVi.server_error });
  }
};

let sendPasswordResetLink = async (req, res) => {
  try {
    let errorArr = [];
    let validationErr = validationResult(req);
    if (!validationErr.isEmpty()) {
      let errors = Object.values(validationErr.mapped());
      errors.forEach((item) => {
        errorArr.push(item.msg);
      });

      return res.status(401).send({ success: false, message: errorArr });
    }
    let { email } = req.body;
    let user = await UserModel.findByEmail(email);
    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: transErrorsVi.email_not_found });
    }

    let response = await authService.sendPasswordResetLink(
      user,
      req.protocol,
      req.get("host")
    );

    return res.status(200).json({ response });
  } catch (err) {
    console.log("err", err);
    return res
      .status(500)
      .send({ success: false, message: transErrorsVi.server_error });
  }
};

let resetPassword = async (req, res) => {
  try {
    let errorArr = [];
    let validationErr = validationResult(req);
    if (!validationErr.isEmpty()) {
      let errors = Object.values(validationErr.mapped());
      errors.forEach((item) => {
        errorArr.push(item.msg);
      });

      return res.status(401).send({ success: false, message: errorArr });
    }

    let response = await authService.resetPassword(req.body);
    if (response && !response.success) {
      return res.status(401).json(response);
    }

    return res.status(200).json(response);
  } catch (err) {
    console.log("err", err);
    return res
      .status(500)
      .send({ success: false, message: transErrorsVi.server_error });
  }
};

module.exports = {
  register,
  verifyAccount,
  login,
  sendPasswordResetLink,
  resetPassword,
};
