//grab fs module to deal with file 
const fs = require('fs');
//console.log(fs);

//create a readstream 
const readable = fs.createReadStream(__dirname+ '/greet.txt', 
    { encoding: 'utf-8', highWaterMark: 1024} );

//create a writestream
const writeable = fs.createWriteStream(__dirname + '/greetCopy.txt');

//use on(), it has eventemitter down the pipeline of prototype chain.
readable.on('data', function(chunk){
    console.log(chunk.length);
    //tell to write in the empty file
    writeable.write(chunk);
});