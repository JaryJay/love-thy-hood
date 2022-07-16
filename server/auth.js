require("dotenv").config({ path: "../config.env" });
const jwt = require("jsonwebtoken");

exports.createJTW = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration,
  };

  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: duration });
};
