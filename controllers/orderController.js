const Order = require("../models/Order.js");

// ▶ Place a new order
exports.placeOrder = async (req, res) => {
  try {
    const { customerName, phone, table, items } = req.body;   // ⭐ table added

    if (!table) {
      return res.status(400).json({ success: false, message: "Table number is required" });
    }

    // Calculate total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = new Order({
      name: customerName,
      phone,
      table,          // ⭐ store table
      items,
      total
    });

    await order.save();

    res.status(200).json({ success: true, message: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// ▶ Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetch orders",
      error: error.message,
    });
  }
};

// ▶ Delete order (Completed)
exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order removed successfully (Completed)",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};