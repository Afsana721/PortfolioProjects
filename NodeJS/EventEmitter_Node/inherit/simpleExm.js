// Use Node.js util module for prototype inheritance  
const util = require('util');

// Function constructor to create new instances  
function Person() {
    this.firstname = 'Asef';
    this.lastname = 'Khan';
}

// Add greet method to Person's prototype  
Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
};

// Another function constructor  
function Policeman() {
    // Using call() to invoke Person inside Policeman, ensuring this refers to Policeman instance  
    Person.call(this);
    this.badgenumber = '1234';
}

// Establish prototype inheritance so Policeman gets access to Person's prototype methods  
util.inherits(Policeman, Person);

// Create a new instance of Policeman  
const general = new Policeman();
console.log(general);

/*`greet()` is available due to prototype inheritance,  
   but `firstname` and `lastname` are `undefined` because util.inherits()  
   only links prototypes and does not copy constructor properties. */  
general.greet();
