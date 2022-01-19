const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RefreshTokenSchema = new mongoose.Schema({
  token: {
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
});
module.exports = mongoose.model("RefreshToken", RefreshTokenSchema);
