const greeting = require("./greetings.json");

const greet = function() {
    //console.log('Hello');
    console.log(greeting.en);
}

module.exports = greet;