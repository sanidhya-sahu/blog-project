const mongoose = require('mongoose');
require("dotenv").config();

const mongoURL = "mongodb://127.0.0.1:27017/test-db";

const connectDB = async () =>{
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });     
        console.log("db-/");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;