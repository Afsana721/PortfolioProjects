// Import dependencies
const express = require("express");
require("dotenv").config(); // Load .env variables
const expressSession = require('express-session');
const mongoose = require("mongoose");
const connectMongo = require("connect-mongo");

// Get PORT from .env or use 3000 as default
const port = process.env.PORT || 3000;


//Invoke express function contructor to get express instance object
const app = express();

//create a get route 
app.get('/', function(req, res) {
    res.send('Hello Word!!');
})

//attaches listener function to listen on the PORT
app.listen(port, function() {
    console.log(`Server listen on the PORT ${port}`);
})
