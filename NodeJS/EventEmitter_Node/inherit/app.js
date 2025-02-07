//use requie() function to get some of core node modules 
const EventEmitter = require('events');
const util = require('util');

//create a function contructor to create new instance of object. 
function Greetr() {
       //create a String as greeting property that can add any instance  
    this.greeting = 'Hello world!'; 
};

//use util core module to get inherits() function to build prototype chain.
/* any object created by the Greetr function constructor, also have access to the method
and properties on the prototype property of EventEmitter.  */
/* So any new object creates from Greetr, will also get all the EventEmitter methods and
properties. */
util.inherits(Greetr, EventEmitter);

/* then we can still properties to the Greeter prototype chain.*/
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

// create a new instance object from Greeter function constructor.
const greeter1 = new Greetr();

//access properties from Greetr and EventEmitter
greeter1.on('greet', function(){
    console.log('Greeting something!!!');
});

// now call greet(). 
greeter1.greet();
