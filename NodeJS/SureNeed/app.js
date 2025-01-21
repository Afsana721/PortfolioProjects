//loads all required modules 
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
//import or loaded two properties from item.js file by object destructuring.  
const { Item, items } = require('./models/items.js');

const app = express();

// Middleware setup
/*use public folder files to get assets and styles objects properties.*/
app.use(express.static('public'));

/*Tells the app (Express instance) that EJS will be the view engine. It will look for
 .ejs files in our views directory by default.*/
app.set('view engine', 'ejs');

// 1. Database connection
mongoose.connect(process.env.dbUrl)
    .then(async () => {
        console.log("Server is connected to MongoDB");

        // 2. Seed the database
        const existingItems = await Item.find();
        if (existingItems.length === 0) {
            await Item.insertMany(items);
            console.log("Items have been seeded into the database.");
        } else {
            console.log("Items already exist in the database.");
        }

        // 3. Routes setup after successful connection
        app.get('/', (req, res) => {
            res.render('index'); // Render the homepage
        });

        app.get('/shop', async (req, res) => {
            const products = await Item.find(); // Fetch items from the database
            res.render('shop', { items: products }); // Pass items dynamically to shop.ejs
        });
    })
    .catch((err) => console.log("Connection is not established", err));

// 4. Listen to server
app.listen(3000, () => {
    console.log('Server is running on the port of 3000');
});
