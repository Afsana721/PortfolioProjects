/*Create database connection to mongoDB by mongoose model. So need mongoose, use its methods. */
const mongoose = require('mongoose');

/*Now call mongoose connection method and pass mongoDB url or address to get connection */
/* It's a asynchronous process, funciton needs to stay its execution context to get back connect conformation or error*/
async function connectionDB() {
/* User try to wrap what works and pass to Error if comes by catch function */
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
}
catch(error) {
    console.log('MongoDB connection Error' + error);
}
};


/*Give abilit to export or use this connection funciton from other files */
module.exports = connectionDB;