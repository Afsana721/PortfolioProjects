//grab mongoose npm registry to connect to database(MongoDB)
const mongoose = require('mongoose');

//Create mongodb Connection object 
async function connectDB() {
//user try catch block where doing something and handle error
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB is connected');
}
catch(error) {
    console.log("MongoDB Connection Error : " + error.message);
}
};


//export connectDB funciton, so user it from other files.
module.exports = connectDB; 