//create a function constructor 
function Greetr() {
    this.greeting = "Hello world! 3"; //adding property to the newly created object by the constructor.  
    this.greet = function() {
        console.log(this.greeting);
    }
};

module.exports = new Greetr();

