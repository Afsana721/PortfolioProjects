// Hoisting and reassignment behavior with var
var a; // Hoisted and initialized as undefined

function b() {
    a = 20; // Assigns to global 'a'
    console.log("Inside function b:", a); // Outputs 20
}

b();
console.log("After calling b, a is:", a); // Outputs 20

var a = 60; // Reassigns the global 'a'
console.log("After reassignment, a is:", a); // Outputs 60