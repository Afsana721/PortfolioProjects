'use strict'; // Enforce strict mode

// Import Greetr class from eventEmitter.js
const Greetr = require('./greetr.js');

// Create a new instance of Greetr
const greeter1 = new Greetr();

// Listen for 'greet' event
greeter1.on('greet', function(data) {
    console.log(`Someone greeted! : ${data}`);
});

// Call the greet method to trigger the event
greeter1.greet('Asef');