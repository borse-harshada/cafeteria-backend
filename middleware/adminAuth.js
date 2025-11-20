const jwt = require("jsonwebtoken");
const JWT_SECRET = "CAFETERIA_SECRET_2025";

module.exports = function (req, res, next) {
    const token = req.headers["authorization"];

    if (!token) return res.status(401).json({ success: false, message: "No token provided" });

    jwt.verify(token.replace("Bearer ", ""), JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ success: false, message: "Invalid token" });

        req.admin = decoded;
        next();
    });
};
