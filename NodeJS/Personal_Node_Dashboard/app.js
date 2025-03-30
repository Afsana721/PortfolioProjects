// Import dependencies
const express = require("express");
require("dotenv").config(); // Load .env variables
const session = require('express-session');
const mongoose = require("mongoose");
const connectMongo = require("connect-mongo");

//Route handle
const homeRoutes = require('./routes/homeRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes');
const forgotRouters = require('./routes/')

//MongoDB connection
const connectDB = require('./models/db.js');
//call connectDB function
connectDB();

// Get PORT from .env or use 3000 as default
const port = process.env.PORT || 3000;

//See README #application-process
const app = express();

//See README #application-process
app.set('view engine', 'ejs');

//See README #application-process
app.use(express.static('public'));

//handle url encoded middleware
app.use(express.urlencoded({ extended: true }));

//session middleware to handle session user sensitive data 
app.use(session(
    {
        secret: 'appsSecret',
        resave: false,
        saveUninitialized: true
    }
));

//execute get route of homeRoutes 
app.use('/', homeRoutes);
app.use('/', authRoutes);
app.use('/', dashboardRoutes);


//See README #application-process
app.listen(port, function () {
    console.log(`Server listen on the PORT ${port}`);
});
