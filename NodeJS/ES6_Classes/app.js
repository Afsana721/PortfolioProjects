'use strict';

//create a funciton 
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}; 

/* every funciton has its prototype object - Funciton.prototype and we can add 
properties on it to call it by its reference and properties available on prototype. */
Person.prototype.greet = function() {
    console.log(`Hello , ${this.firstname}  ${this.lastname}`);
};

//create a new instance using Person function
const asef = new Person('Asef', 'Khan');
asef.greet();

console.log('\n ES6 ....................... ');
//so we can use ES6 class to do same things 

class Person2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname; 
    }
/*so now what about adding properties to prototype, so available in down the chain. 
    its a class so I can use variable and method inside it, it will be considered it 
    instance field. */
    greet() {
        console.log(`Hello, ${this.firstname}  ${this.lastname}`);
    }
    greet2() {
        const fullname = `${this.firstname} ${this.lastname};`;
        return fullname  
    }
}
const masud = new Person2('Masud', 'Khan');
console.log(masud);

masud.greet();
console.log(masud.greet2());