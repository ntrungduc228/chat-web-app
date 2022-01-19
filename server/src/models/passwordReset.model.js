const mongoose = require("mongoose");
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
module.exports = mongoose.model("PasswordResetToken", PasswordResetTokenSchema);
