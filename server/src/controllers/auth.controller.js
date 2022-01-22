const { transSuccess, transErrors } = require("../../lang/vi");
const { validationResult } = require("express-validator");
const emailService = require("../services/email.service");
const mailService = require("../services/emails/mail.service");
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
    console.log("protocol", req.protocol);
    console.log("host", req.get("host"));
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

module.exports = { register, verifyAccount };
