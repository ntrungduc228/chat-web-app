const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MessageSchema = new Schema(
  {
    senderId: String,
    receiverId: String,
    conversationType: String,
    messageType: String,
    sender: {
      id: String,
      name: String,
    },
    receiver: {
      id: String,
      name: String,
    },
    text: String,
    file: {
      data: Buffer,
      contentType: String,
      fileName: String,
    },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
