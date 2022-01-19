const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/chat-web-app";
const typeOfDB = process.env.DB_URI ? "clouds" : "local";

/**
 * Connect to MongoDB
 */

async function connectDB() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${typeOfDB} DB successfully !!!`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectDB };
