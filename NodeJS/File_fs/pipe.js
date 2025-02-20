//grab fs module to deal with file 
const fs = require('fs');

//allows gzip file
const zlib = require('zlib');

//console.log(fs);

//create a readstream 
const readable = fs.createReadStream(__dirname+ '/greet.txt' );

//create a writestream
const writeable = fs.createWriteStream(__dirname + '/greetCopy.txt');

const compressed = fs.createWriteStream(__dirname + 'greet.txt.gz');

//zip format 
const gzip  = zlib.createGzip();

// pipe() takes readable things and write them to the writeable destination. 
readable.pipe(writeable);
readable.pipe(gzip).pipe(compressed);