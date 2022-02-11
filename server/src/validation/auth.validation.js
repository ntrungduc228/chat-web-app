const { check } = require("express-validator");
const { transValidationVi, transErrorsVi } = require("../../lang/vi");
const { transValidationEn, transErrorsEn } = require("../../lang/en");

let register = [
  check("email", transValidationEn.email_incorrect).isEmail().trim(),
  check("gender", transValidationEn.gender_incorrect).isIn(["male", "female"]),
  check("password", transValidationEn.password_incorrect).isLength({ min: 6 }),
  // .matches(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/ ),
  //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  check(
    "confirm_password",
    transValidationEn.confirm_password_incorrect
  ).custom((value, { req }) => value === req.body.password),
];

let login = [
  check("email", transErrorsEn.account_login_incorrect).isEmail().trim(),
  check("password", transErrorsEn.account_login_incorrect).isLength({
    min: 6,
  }),
];

let sendPasswordReset = [
  check("email", transValidationVi.email_incorrect).isEmail().trim(),
];

let resetPassword = [
  check("email", transValidationVi.email_incorrect).isEmail().trim(),
  check("password", transValidationVi.password_incorrect).isLength({ min: 6 }),
  // .matches(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/ ),
  //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  check(
    "confirm_password",
    transValidationVi.confirm_password_incorrect
  ).custom((value, { req }) => value === req.body.password),
];

module.exports = {
  register,
  login,
  sendPasswordReset,
  resetPassword,
};
