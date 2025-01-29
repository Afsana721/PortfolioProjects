// create a function 
function greet() {
    console.log("Hello, how are you!!");
}
//invokes the greet function. 
greet();

//create a function and pass a function as args
function passGreet(fn) {
    fn();
}
//pass greet as its args;
passGreet(greet);

//funciton expression
var greetMe = function() {
    console.log("Hello, all!!");
};
greetMe();
// pass the express variable as args
passGreet(greetMe);

// use a funciton express on the fly when it executes, so we can see output also. 
passGreet(function() {
    console.log("Hi, everyone!");
})

//pass function object on the fly.
passGreet(function() {
   return "Hi, from expres";
});




//chat gpt 
// Create a function
function greet() {
    console.log("Hello, how are you!!");
}
greet(); // Invoke the function

// Pass a function as an argument
function passGreet(fn) {
    fn(); // Call the passed function
}
passGreet(greet); // Passing a function reference

// Function expression
var greetMe = function() {
    console.log("Hello, all!!");
};
greetMe(); // Invoke the function

// Pass function object on the fly
passGreet(function() {
    console.log("Hi, from express!");
});
