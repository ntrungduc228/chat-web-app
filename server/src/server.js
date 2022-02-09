const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const db = require("./configs/db.config");
const initWebRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Connect to Database
db.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config static folder
app.use(express.static(path.join(__dirname, "public")));

// Config routes
initWebRoutes(app);

app.listen(port, () => {
  console.log(`App listening at PORT ${port}`);
});
