const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const createError = require("../utils/createErrors.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.acessToken;

  if (!token) {
    return next(createError(401, "your are not authenticated"));
  }

  jwt.verify(token, JWT_KEY, async (err, payload) => {
    if (err) {
      return next(createError(403, "invalid token"));
    }
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};

module.exports = verifyToken;
