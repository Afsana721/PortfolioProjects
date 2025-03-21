// Import dependencies
const express = require("express");
require("dotenv").config(); // Load .env variables
const expressSession = require('express-session');
const mongoose = require("mongoose");
const connectMongo = require("connect-mongo");
const homeRoutes = require('./routes/homeRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes');

// Get PORT from .env or use 3000 as default
const port = process.env.PORT || 3000;

//See README #application-process
const app = express();

//See README #application-process
app.set('view engine', 'ejs');

//See README #application-process
app.use(express.static('public'));

 //execute get route of homeRoutes 
 app.use('/', homeRoutes );
 app.use('/', authRoutes);
 app.use('/', authRoutes);
 app.use('/', dashboardRoutes);

//See README #application-process
app.listen(port, function() {
    console.log(`Server listen on the PORT ${port}`);
});
