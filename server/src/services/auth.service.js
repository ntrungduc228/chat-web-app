const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { transErrors, transSuccess } = require("../../lang/vi");

let salt = bcrypt.genSaltSync(10);

let register = (data) => {
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

      resolve({
        success: true,
        message: transSuccess.userCreated(user.local.email),
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { register };
