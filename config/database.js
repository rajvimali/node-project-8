const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect(
        "mongodb+srv://rajvimali1112:Fdfe5AfB0cTNlaC4@cluster0.qltwlks.mongodb.net/"
    );
    console.log("database connected.");
}

module.exports = db;