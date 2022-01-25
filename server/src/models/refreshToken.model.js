const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const Schema = mongoose.Schema;

let RefreshTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // userEmail: {
  //   type: String,
  //   ref: "User",
  // },
  expires: { type: Date },
});

RefreshTokenSchema.statics = {
  async generate(user) {
    let expiredAt = new Date();
    let refreshTokenLife = process.env.REFRESH_TOKEN_LIFE;
    expiredAt = moment().add(refreshTokenLife, "minutes").format();
    let _token = uuidv4();

    let tokenObject = new this({
      token: _token,
      userId: user._id,
      expires: expiredAt,
    });

    await tokenObject.save();
    return tokenObject;
  },

  verifyExpiration(token) {
    return token.expires.getTime() < new Date().getTime();
  },

  findByToken(token) {
    return this.findOne({
      token: token,
    }).exec();
  },

  removeById(id) {
    return this.findByIdAndRemove(id, { useFindAndModify: false }).exec();
  },
};

module.exports = mongoose.model("RefreshToken", RefreshTokenSchema);
