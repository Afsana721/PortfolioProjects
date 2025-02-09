//Passing Variables, Objects, and Functions to a Class Constructor

class Person {
    constructor(name, data, action) {
        this.name = name; 
        this.data = data;
        this.action = action;  // Store function reference
    }

    greet() {
        console.log(`${this.name} is ${this.data.age} years old.`);
    }

    executeAction() {
        this.action();  // Invoke the stored function
    }
}

// Creating an instance with a function parameter
const obj = new Person("Asef", {age: 13, report: 'updated'}, function() {
    console.log("Executing stored function...");
});

// Accessing properties and invoking the function
obj.greet();         // Output: Asef is 13 years old.
obj.executeAction(); // Output: Executing stored function...
