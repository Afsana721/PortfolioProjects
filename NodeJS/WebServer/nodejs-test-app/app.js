//grab express 
const express = require('express');
//const bodyParser = require('body-parser');// object that can parse 

//handle middleware
//const urlencodeParser = bodyParser.urlencoded( { extended: false });

//express gave this function.
const urlencodeParser = express.urlencoded( { extended: false });

//handle JSON data 
//const jsonParser = bodyParser.json();

// by express
const jsonParser = express.json();


//call the express function to gets some properties and methods.
//so we can app, and this is a working app.  
const app = express();

//set an environment variable whatever is and set a default value. 
const port = process.env.PORT || 3000;

//use middleware, use express built in funciton static().
app.use('/assets', express.static(__dirname +'/public'));

//use view engine ejs as file extension.
app.set('view engine', 'ejs');

//use express next()
app.use('/', function(req, res, next) {
    console.log("Request Url " + req.url);
    next();
});

//make a request -GET and access request and response object and use them 
app.get('/', function(req, res) {
    //attaches file to res object
    res.render('index');
   
});

//create a route with a variable using params object.
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, n:req.query.qstr  } );
});

//Post request and parse the body by the middleware and grab data from form post
app.post('/person', urlencodeParser, function(req, res) {
    res.send('OK, Thank Your!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

//handle JSON data, jsonParser will handle getting that from request.
app.post('/personjson', jsonParser, function(req, res) {
    res.send('JSON data handled!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

//send Json data as response 
app.get('/api', (req, res) => {
     res.json({ firstname: 'Asef', lastname: 'Khan'});
})

app.listen(port);


