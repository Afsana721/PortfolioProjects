const greet1 = require('./greet1.js');

console.log(greet1);
greet1(); // return a function reference, so it invokable. 


const greet2 = require('./greet2.js').greet;
console.log(greet2); /* return greet as an exports key which holds a function. So 
                        not invokable - { greet: [Function (anonymous)] }. */
console.log(greet2.greet); // now it returns a function that holds greet, and invokable. 
//greet2.greet();
greet2();

//create a function constructor 
const greet3 = require('./greet3.js');
console.log(greet3);  // gets an object that is created by Greetr() constructor. 
greet3.greet();
greet3.greeting = 'Change Hello world!'; // changine the greeting value. 

const greet3b = require('./greet3.js'); //getting again the instance of the object.
console.log(greet3b);
greet3b.greet();    // object is changed its greeting value. Same object instance. 
console.log(greet3); /*require does, it caches/ stores the results of the require function
for any particular file name and making same object reference. */

//create a class 
 const greet4 = require('./greet4.js');
console.log(greet4); // gets an object by require
greet4.greet(); 


