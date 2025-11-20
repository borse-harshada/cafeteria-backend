const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect("mongodb+srv://borseharshu:Harshu123@cafeteriacluster.lrebooy.mongodb.net/?appName=cafeteriaCluster");

async function seedAdmins() {
    const admins = [
        { email: "borseharshu27@gmail.com", password: "Harshu@123" },
        { email: "foodhub@gmail.com", password: "Foodhub@123" },
        { email: "manager@cafe.com", password: "manager123" },
        { email: "chaudharinitin2006@gmail.com", password: "Nitin@123" }
    ];

    for (let a of admins) {
        const hashed = await bcrypt.hash(a.password, 10);
        await Admin.create({ email: a.email, password: hashed });
        console.log(`Added: ${a.email}`);
    }

    console.log("Admins inserted!");
    process.exit();
}

seedAdmins();
