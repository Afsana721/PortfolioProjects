/*Import Express and store the function reference in a variable.*/
const express = require("express");

/*Call the express function, which creates an instance (app) with its own execution 
context and holds express's properties and methods along with its own.*/
const app = express();

/* Set up PORT to listen for browser requests.
   - In production, use the environment variable (dynamic PORT based on the hosting server).
   - Locally, default to port 3000 if no environment variable is set. */
var port = process.env.PORT || 3000; 

/*Middleware to recongnize folder where some static file - like CSS or images that 
would be use on this applicaiton. use() takes two parameters */
/*  Route or URL path (optional) → Defines where the middleware should apply.
    Middleware function → Defines what to do when a request matches the route. */

app.use('/assets', express.static(__dirname + '/public'));
