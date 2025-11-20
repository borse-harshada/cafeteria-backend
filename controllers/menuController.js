const MenuItem = require("../models/MenuItem.js");

exports.addItem = async (req, res) => {
    try {
        const item = new MenuItem(req.body);
        await item.save();
        res.json({ message: "Item added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.getAllItems = async (req, res) => {
    const items = await MenuItem.find();
    res.json(items);
};

exports.deleteItem = async (req, res) => {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
};
