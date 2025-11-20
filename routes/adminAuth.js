const express = require("express");
const Admin = require("../models/Admin.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = "CAFETERIA_SECRET_2025"; // change for security

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) return res.json({ success: false, message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.json({ success: false, message: "Invalid email or password" });

        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            JWT_SECRET,
            { expiresIn: "2d" }
        );

        res.json({ success: true, token });
    } catch (err) {
        res.json({ success: false, message: "Login failed" });
    }
});

module.exports = router;
