//grab express 
const express = require('express');
const app = express();

//define port variable 
const port = process.env.PORT || 3000;

const people = [
    {
        name: 'Asef Khan'
    },
    {
        name: 'Mohammad Khan'
    },
    {
        name: 'Jane Albert'
    },
    {
        name: 'Kim Jim'
    }

];

//set view engint with ejs template 
app.set('view engine', 'ejs');

//set middleware to handle static files
app.use('/assets', express.static(__dirname + '/public'));

//create a root route 
app.get('/', function(req, res) {
    res.render('index', { serverPeople: people });
});

//server will listen on the PORT 
app.listen(port);