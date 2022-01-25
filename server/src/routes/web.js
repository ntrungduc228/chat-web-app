const express = require("express");
let router = express.Router();
const authController = require("../controllers/auth.controller");

const { authValid } = require("../validation/index");
const authMiddleware = require("../middlewares/auth");
const moment = require("moment");

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router.post("/register", authValid.register, authController.register);
  router.post("/verify-account", authController.verifyAccount);
  router.post("/login", authValid.login, authController.login);
  router.post(
    "/send-password-reset-link",
    authValid.sendPasswordReset,
    authController.sendPasswordResetLink
  );
  router.post(
    "/reset-password",
    authValid.resetPassword,
    authController.resetPassword
  );

  router.get("/check", authMiddleware.checkLoggedIn);
  router.get("/checktime", (req, res) => {
    return res.status(200).json({
      data: moment().format(),
      newDate: moment().add(3, "minutes").format(),
    });
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
