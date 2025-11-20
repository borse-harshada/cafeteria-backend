const express = require("express");
const router = express.Router();
const { addItem, getAllItems, deleteItem } = require("../controllers/menuController.js");

router.post("/add", addItem);
router.get("/all", getAllItems);
router.delete("/delete/:id", deleteItem);

module.exports = router;
