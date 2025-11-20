const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getAllOrders,
  deleteOrder,
} = require("../controllers/orderController.js");

router.post("/place", placeOrder);
router.get("/all", getAllOrders);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
