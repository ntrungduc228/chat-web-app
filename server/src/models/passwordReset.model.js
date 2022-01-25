const mongoose = require("mongoose");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;

let PasswordResetTokenSchema = new mongoose.Schema(
  {
    resetToken: {
      type: String,
      required: true,
      index: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userEmail: {
      type: "String",
      ref: "User",
      required: true,
    },
    expires: { type: Date },
  },
  { timestamps: true }
);

PasswordResetTokenSchema.statics = {
  async generate(user) {
    let expiredAt = new Date();
    let tokenLife = process.env.PASSWORD_TOKEN_LIFE_HOURS || 3;
    expiredAt = moment().add(tokenLife, "hours").format();
    let resetToken = uuidv4();

    let ResetTokenObject = new this({
      resetToken: resetToken,
      userId: user._id,
      userEmail: user.local.email,
      expires: expiredAt,
    });

    await ResetTokenObject.save();
    return ResetTokenObject;
  },
};

module.exports = mongoose.model("PasswordResetToken", PasswordResetTokenSchema);
