const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let NotificationSchema = new Schema(
  {
    senderId: String,
    receiverId: String,
    type: String,
    isRead: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", NotificationSchema);
