/*Import Express and store the function reference in a variable.*/
const express = require("express");

/*Call the express function, which creates an instance (app) with its own execution 
context and holds express's properties and methods along with its own.*/
const app = express();

//grab mongoose 
const mongoose = require('mongoose');

//grab the cofig to get connection 
const config = require('./config');

//import setupContrller.js 
const setupContrller = require('./controllers/setupController');

//import apiContrller
const apiContrller = require('./controllers/apiController');


/* Set up PORT to listen for browser requests.
   - In production, use the environment variable (dynamic PORT based on the hosting server).
   - Locally, default to port 3000 if no environment variable is set. */
var port = process.env.PORT || 3000; 

/*Middleware to recognize folder where some static file - like CSS or images that
would be used on this application. use() takes two parameters */
/*  Route or URL path (optional) → Defines where the middleware should apply.
    Middleware function → Defines what to do when a request matches the route. */
app.use('/assets', express.static(__dirname + '/public'));

//attache view engine 
app.set('view engine', 'ejs');


//use mongoose and its method connect to the database 
mongoose.connect(config.getDbConnectionString());
setupContrller(app);
apiContrller(app);



//listen on the PORT 
app.listen(port, function() {
    console.log(`Server is running on the PORT ${port}`);
})
