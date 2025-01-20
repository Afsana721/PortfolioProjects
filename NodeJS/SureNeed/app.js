//loads all required modules 
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const nodemon = require('nodemon');
//import or loaded two properties from item.js file by object destructuring.  
const {Item, items } = require('./models/items.js');

const app = express();


//Middleware setup

/*use public folder files to get assets and styles objects properties. Here we ues 
use() method that manages middleware by acting as a pipeline for handling requests 
and responses: */
app.use(express.static('public'));

// Set the views folder path
//app.set('views', './src/views');

/*Tells the app (Express instance) that EJS will be the view engine. It will look for
 .ejs files in our views directory by default.*/
app.set('view engine', 'ejs');


// 2. Database connection
mongoose.connect(process.env.dbUrl)
    .then(() => {
        console.log("Server is connected to MongoDB");

        // 3. Routes setup after successful connection
        app.get('/', (req, res) => {
            res.render('index'); // Render the homepage
        });
    })
    .catch((err) => console.log("Connection is not established", err));

//listen to server 
    app.listen(3000, () => {
        console.log('Server is running on the port of 3000');
    })