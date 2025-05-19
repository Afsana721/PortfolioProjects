//grab all require core modules 
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const cors = require('cors');
const connectDB = require('./config/db.js');

//Grab router module
const authRouter = require("./routes/authRouter.js");
const userProfileRouter = require("./routes/userProfileRouter.js");
const apiRouter = require("./routes/apiRouter.js");


//get express instance 
const app = express();

//GET PORT from .env or user 5000 port.
const port = process.env.PORT || 5000;

app.use(cors()); // Allows browser to access server from a different port (like 3000 → 5000)

/* handle all middleware which is globally */
//handle static files 
app.use(express.static('public'));

//handle browser url encoding that comes as request objct
app.use(express.urlencoded({ extended: true }));

//handle json data http request 
app.use(express.json());

//handle session data that comes from browser as cookies
app.use(session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }
));

//Call connection object, which is a function that connect to mongodb. 
connectDB();

//hanlde or execute router with callback controller fucntion 
app.use("/", authRouter);   //use Register route with regiter user data.
app.use("/LoginForm", authRouter);  //useLoginForm route with login user data.
app.use("/UserProfile", userProfileRouter); // use UserProfile route with user data and post data
app.use("/api", apiRouter);

//Call linten funciton to listen on the PORT
app.listen(port, function () {
    console.log(`Server listen on the PORT ${port}`);
});