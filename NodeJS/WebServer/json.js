//grab http core module and fs for filesystem management.
const http = require('http');
const fs = require('fs');

//create a webserver, who can make http requests and sending response to browser via node. 
http.createServer(function(req, res) {
    //write header to specify status code and content type as MIME type in res object.
    res.writeHead(200, { 'Content-Type': 'application/json'});
   //create some data and send this back as JSON data. 
   var obj = {
        firstName: 'Asef', 
        lastName: 'Khan'
   }
//use JSON's method to serialise JavaScript object to JSON data. 
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');