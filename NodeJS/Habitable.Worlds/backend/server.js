//grab all require core modules 
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const cors = require('cors');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db.js');


//get express instance 
const app = express();

//GET PORT from .env or user 5000 port.
const port = process.env.PORT || 5000;

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
))

connectDB();

app.get('/', function(req, res ) {
    res.send('Hello World!!');
});


//Call linten funciton to listen on the PORT
app.listen(port, function() {
    console.log(`Server listen on the PORT ${port}`);
})