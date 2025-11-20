const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://borseharshu:Harshu123@cafeteriacluster.lrebooy.mongodb.net/?appName=cafeteriaCluster");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Connection Error:", err);
  }
};

module.exports = connectDB;
