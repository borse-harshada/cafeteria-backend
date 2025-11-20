const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    image: String,
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuSchema);
