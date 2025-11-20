const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: String,
    phone: String,

    items: [
        { 
            name: String,       // FIXED (was itemName)
            price: Number, 
            quantity: Number 
        }
    ],

    total: Number,              // FIXED (was totalAmount)

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
