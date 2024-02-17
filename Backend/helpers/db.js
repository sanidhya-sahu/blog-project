const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://sanidhyasahu:sanidhya.09@cluster0.8uopelz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () =>{
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });     
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;