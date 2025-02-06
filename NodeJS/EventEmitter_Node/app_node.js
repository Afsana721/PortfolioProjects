// Use Node.js event emitter; 'events' is a built-in JavaScript module. 
const Emitter = require('events');

// Create an instance of EventEmitter
const emtr = new Emitter(); 

// Attach 'greet' event with listener functions to the events object
emtr.on('greet', function(){
    console.log('core events module!');
});

emtr.on('greet', function(){
    console.log('again core events module!');
});

emtr.on('greet', function(){
    console.log('and again core events module!');
});

// Check that 'on' function has attached listeners to the 'greet' event
console.log('check on function attached things in type property');

// Call emit function to trigger all listeners attached to 'greet'
emtr.emit('greet');