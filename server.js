const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// Connect DB
connectDB();

// ROUTES ------------------------------------------------

// Admin Auth Routes (must be FIRST)
const adminAuthRoutes = require("./routes/adminAuth");
const adminAuth = require("./middleware/adminAuth");

app.use("/api/admin", adminAuthRoutes);

// Menu routes
app.use("/api/menu", require("./routes/menuRoutes"));

// Orders routes
app.use("/api/orders", require("./routes/orderRoutes"));

// Test route
app.get("/", (req, res) => {
    res.send("Cafeteria Backend Running");
});

// PROTECTED ROUTE TEST
app.get("/api/admin/check", adminAuth, (req, res) => {
    res.json({ success: true, message: "Admin verified" });
});

// START SERVER ------------------------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
