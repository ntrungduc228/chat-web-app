const jwt = require("jsonwebtoken");

let generateToken = (data, secret, tokenLife) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, secret, { expiresIn: tokenLife }, (error, token) => {
      if (error) {
        return reject(error);
      }
      resolve(token);
    });
  });
};

let verifyToken = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        if (err && err.name === "TokenExpiredError") {
          return resolve({ success: false, err });
        }
        return reject(err);
      }
      resolve(decoded);
    });
  });
};

module.exports = { generateToken, verifyToken };
