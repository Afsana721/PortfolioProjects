const Emitter = require('./emitter.js');
console.log(Emitter);

const emtr = new Emitter();

emtr.on('greet', function(){
    console.log('You said, hello!');
})

emtr.on('greet', function(){
    console.log('She said, hello!');
})

emtr.on('greet', function(){
    console.log('He said, hello!');
})

/*when the event happens then I can see the console log after on function pass the greet
type to the event object and add the listener */
console.log('event is happened!!!');

// so now I can call emit which is a function and pass the type
emtr.emit('greet');