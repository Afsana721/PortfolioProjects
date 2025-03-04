const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    //add some condition to specify route
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    else if(req.url === '/api') {

    res.writeHead(200, { 'Content-Type': 'application/json'});
    var obj = {
        firstName: 'Asef',
        lastName: 'Khan'
    };
    res.end(JSON.stringify(obj));
    }
    else{
    res.writeHead(404);
    res.end();
    }

}).listen(1337, '127.0.0.1');