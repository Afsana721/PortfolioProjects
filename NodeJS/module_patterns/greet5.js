//create a funciton constructor.
function Greetr() {
    this.greeting = 'Hello world! 5';
    this.greet = function() {
        console.log(this.greeting);
    }
}

//export the function constructor not the instance 
module.exports = Greetr;





