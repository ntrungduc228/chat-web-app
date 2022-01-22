const express = require("express");
let router = express.Router();
const authController = require("../controllers/auth.controller");

const { authValid } = require("../validation/index");

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router.post("/register", authValid.register, authController.register);
  router.post("/verify-email", authController.verifyAccount);
  router.post("/verify-account", authController.verifyAccount);

  return app.use("/", router);
};

module.exports = initWebRoutes;
