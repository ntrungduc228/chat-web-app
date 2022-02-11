const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

/**
 * User Roles
 */
const roles = ["user", "admin"];

let UserSchema = new Schema(
  {
    username: { type: String },
    gender: { type: String, default: "male" },
    phone: { type: Number, default: null },
    address: { type: String, default: null },
    avatar: { type: String, default: "avatar-default.jpg", trim: true },
    role: { type: String, default: "user" },
    local: {
      email: { type: String, trim: true, unique: true },
      password: { type: String, required: true, minLength: 6, maxLength: 128 },
      isActive: { type: Boolean, default: false },
      verifyToken: { type: String },
    },
    facebook: {
      uid: { type: String },
      token: { type: String },
      email: { type: String, trim: true },
    },
    google: {
      uid: { type: String },
      token: { type: String },
      email: { type: String, trim: true },
    },
    deleteAt: { type: Date, default: null },
  },
  { timestamps: true }
);

UserSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  findByEmail(email) {
    return this.findOne({ "local.email": email }).exec();
  },

  removeById(id) {
    return this.findByIdAndRemove(id).exec();
  },

  findByToken(token, email) {
    return this.findOne({
      "local.verifyToken": token,
      "local.email": email,
    }).exec();
  },

  findUserById(id) {
    return this.findById(id).exec();
  },

  verify(token, email) {
    return this.findOneAndUpdate(
      { "local.verifyToken": token, "local.email": email },
      { "local.isActive": true, "local.verifyToken": null }
    ).exec();
  },
};

UserSchema.methods = {
  comparePassword(password) {
    // return a promise has result is true or false
    return bcrypt.compare(password, this.local.password);
  },
};

module.exports = mongoose.model("User", UserSchema);
