const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GroupSchema = new Schema(
  {
    name: String,
    userAmount: { type: Number, min: 3, max: 150 },
    messageAmount: { type: Number, default: 0 },
    userId: String,
    avatar: { type: String, default: "avatar-group.png" },
    members: [{ userId: String }],
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Group", GroupSchema);
