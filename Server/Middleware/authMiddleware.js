const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.auth = (req, res, next) => {
  const { token } = req.cookies;

  try {
    if (!token) {
      return res.status(401).json({ message: "Access Denied token missing " });
    } else {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified; // Add the user's data to the request object
    }

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

// req.header('Authorization');
