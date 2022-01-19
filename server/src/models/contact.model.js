const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ContactSchema = new Schema(
  {
    userId: String,
    contactId: String,
    status: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
