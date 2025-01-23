// Load all required modules
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const { Item, items } = require('./models/items.js'); // Import model and seed data

const app = express();

// Middleware setup
app.use(express.static('public')); // Serve static files from "public" folder
app.use(express.urlencoded({ extended: true })); // Parse form data

//adding Express JSON Middleware
app.use(express.json());

// Use session to manage user cart data
app.use(session({
    secret: 'my-secure-random-project-key-2025',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

/* Middleware runs for every request before the routes
 Middleware to calculate cart count and make it available to all views*/
app.use((req, res, next) => {
    // If the session cart exists, calculate its length; otherwise, set to 0
    const cart = req.session.cart || [];
    res.locals.cartCount = cart.length; // Make cartCount available globally
    next(); // Proceed to the next middleware/route
});


// Set the view engine to EJS
app.set('view engine', 'ejs');

// 1. Database connection
mongoose.connect(process.env.dbUrl)
    .then(async () => {
        console.log("Server is connected to MongoDB");

        // Seed the database if items do not exist
        const existingItems = await Item.find();
        if (existingItems.length === 0) {
            await Item.insertMany(items);
            console.log("Items have been seeded into the database.");
        } else {
            console.log("Items already exist in the database.");
        }

        // 2. Routes setup
        app.get('/', (req, res) => {
            res.render('index'); // Render the homepage
        });

        app.get('/shop', async (req, res) => {
            const products = await Item.find(); // Fetch items from the database
            res.render('shop', { items: products }); // Pass items dynamically to shop.ejs
        });

        app.post('/add-to-cart', (req, res) => {
            const { itemName, itemPrice, itemImage } = req.body; // Get item data from the request

            // Initialize session cart if not already set
            if (!req.session.cart) {
                req.session.cart = [];
            }

            // Add the item to the cart
            req.session.cart.push({ name: itemName, price: itemPrice, image: itemImage });

            console.log("Item added to cart:", req.session.cart);

            // Send a success response
            res.status(200).json({ message: "Item added to cart successfully." });
        });

        app.get('/cart', (req, res) => {
            const cartItems = req.session.cart || []; // Retrieve items from session cart
            res.render('cart', { cartItems }); // Pass cart items to cart.ejs
        });
    })
    .catch((err) => console.log("Connection is not established", err));

// 3. Listen to the server
app.listen(3000, () => {
    console.log('Server is running on the port of 3000');
});
