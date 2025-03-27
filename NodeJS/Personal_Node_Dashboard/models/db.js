const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');

//Create mongodb connection 
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.log("MongoDB connection Error : " + error.message);
    }
};

module.exports = connectDB;