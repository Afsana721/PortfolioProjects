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

// Adding Express JSON Middleware
app.use(express.json());

// Use session to manage user cart data
app.use(session({
    secret: 'my-secure-random-project-key-2025',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

/* Middleware to calculate cart count and make it available to all views */
app.use((req, res, next) => {
    const cart = req.session.cart || [];
    console.log("Session Cart:", cart); // Debugging: Log the session cart
    res.locals.cartCount = cart.length; // Make cartCount available globally
    next();
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

        // Routes setup
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

            // Redirect to the cart page
            res.redirect('/cart');
        });

        app.get('/cart', (req, res) => {
            const cartItems = req.session.cart || []; // Retrieve items from session cart
            res.render('cart', { cartItems }); // Pass cart items to cart.ejs
        });

        // Categories Route
        app.get('/categories', (req, res) => {
            // Render the categories page with no specific category to show
            res.render('categories', { categoryToShow: null });
        });
    })
    .catch((err) => console.log("Connection is not established", err));



// Search Route
app.get('/search', (req, res) => {
    const searchTerm = req.query.q?.toLowerCase(); // Get the search term from the query string, case-insensitive

    if (!searchTerm) {
        // If no search term, redirect back to categories
        return res.redirect('/categories');
    }

    // Predefined categories and their corresponding names
    const categories = ['electronics', 'fashion', 'home & living'];

    if (categories.includes(searchTerm)) {
        // If search term matches a category, render that category
        return res.render('categories', { categoryToShow: searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) }); // Capitalize category
    } else {
        // If search term doesn't match, render "No items found"
        return res.render('categories', { categoryToShow: 'No items found' });
    }
});





// Start the server
const PORT = process.env.PORT || 3000;
// Listen to the server
app.listen(PORT, () => {
    console.log('Server is running on the port of 3000');
});
