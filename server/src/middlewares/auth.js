const jwtHelper = require("../helpers/jwt");
const authService = require("../services/auth.service");

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

let checkLoggedIn = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"] || req.body.token;

    if (!token) {
      return res.status(200).send({
        success: false,
        message:
          "Please provide authorization credentials for accessing this endpoint.",
      });
    }

    let decoded = await jwtHelper.verifyToken(token, accessTokenSecret);
    let checkRFToken = {};
    if (decoded.err && decoded.err.name === "TokenExpiredError") {
      const refreshTokenFromClient =
        req.body.refreshToken || req.headers["refresh-token"];
      checkRFToken = await authService.verifyRFToken(refreshTokenFromClient);
    }

    if (checkRFToken && checkRFToken) {
      decoded.checkRFToken = checkRFToken;
      return res.status(200).json({
        decoded,
      });
    } else {
      return res.status(403).json(decoded);
    }

    // return res.json({ decoded });
  } catch (err) {
    return res.json({
      success: false,
      err: err,
      message:
        "Please provide authorization credentials for accessing this endpoint.",
    });
  }
};

let checkLoggedOut = (req, res, next) => {};

module.exports = { checkLoggedIn, checkLoggedOut };
