//use require to grab fs module, node core built-in, in JavaScript side.
const fs = require('fs');

//use readFileSync() method to read file but asynchronously. 
/*give the path of the file on the computer hard drive. and use default parameter, but
not required */
const greet = fs.readFileSync(__dirname +'/greet.txt', 'utf8');
console.log(greet);

// asynchronously with readFile()
const greet2 = fs.readFile(__dirname +'/greet.txt', 'utf8',
    function(err, data){
        console.log(data);
});

console.log('Finished JS synchronous code running.');