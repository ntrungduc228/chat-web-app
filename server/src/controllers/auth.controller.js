const { transSuccess, transErrors } = require("../../lang/vi");
const { validationResult } = require("express-validator");
const emailService = require("../services/email.service");
const authService = require("../services/auth.service");

let register = async (req, res) => {
  let errorArr = [];
  let validationErr = validationResult(req);
  if (!validationErr.isEmpty()) {
    let errors = Object.values(validationErr.mapped());
    errors.forEach((item) => {
      errorArr.push(item.msg);
    });

    return res.status(401).send({ success: false, message: errorArr });
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
      .send({ success: false, message: transErrors.server_error });
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
      .send({ success: false, message: transErrors.server_error });
  }
};

module.exports = { register, verifyAccount, login };
