// Import Node.js core 'events' module
const EventEmitter = require('events');

// Create a class and extend EventEmitter to attach its prototype. 
module.exports = class Greetr extends EventEmitter {
    constructor() {
//Call EventEmitter's constructor to inherit its properties/methods in the current instance.
        super(); 
        this.greeting = 'Hello world!';
    }

    // Method to log a message and emit an event
    greet(data) {
        console.log(`${this.greeting} : ${data}`);
        this.emit('greet', data); // Trigger the 'greet' event
    }
};

