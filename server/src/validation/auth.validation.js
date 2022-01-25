const { check } = require("express-validator");
const { transValidation, transErrors } = require("../../lang/vi");

let register = [
  check("email", transValidation.email_incorrect).isEmail().trim(),
  check("gender", transValidation.gender_incorrect).isIn(["male", "female"]),
  check("password", transValidation.password_incorrect).isLength({ min: 6 }),
  // .matches(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/ ),
  //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  check(
    "password_confirmation",
    transValidation.password_confirmation_incorrect
  ).custom((value, { req }) => value === req.body.password),
];

let login = [
  check("email", transErrors.account_login_incorrect).isEmail().trim(),
  check("password", transErrors.account_login_incorrect).isLength({
    min: 6,
  }),
];

let sendPasswordReset = [
  check("email", transValidation.email_incorrect).isEmail().trim(),
];

let resetPassword = [
  check("email", transValidation.email_incorrect).isEmail().trim(),
  check("password", transValidation.password_incorrect).isLength({ min: 6 }),
  // .matches(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/ ),
  //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  check(
    "password_confirmation",
    transValidation.password_confirmation_incorrect
  ).custom((value, { req }) => value === req.body.password),
];

module.exports = {
  register,
  login,
  sendPasswordReset,
  resetPassword,
};
