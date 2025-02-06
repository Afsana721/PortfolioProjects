//Object properties and method
const obj = {
    greet: 'Hello'}
//access the property on the object
console.log(obj.greet);
//can access the object property by using [] with the name as a string.
//So this is able to dynamic, it's string, so we can change
console.log(obj['greet']);


const prop = 'greet';
//use the variable in brackets to get a particular property on an object.
console.log(obj[prop]);

/*Functions as First-Class Citizens.Functions can be stored in variables, passed as 
arguments, and pushed into arrays. */
//function and arrays
var arr = [];
//use push method to push items to the empty array
arr.push(function() {
    console.log('Hello again 1');});
arr.push(function() {
    console.log('Hello again 2');});
arr.push(function() {
    console.log('Hello again 3');});

//call / invoke array functions using its index. 
    // arr[0]();
    // arr[1]();
    // arr[2]();

// use forEach function to invoke array functions
arr.forEach(function(item) {
    item();
})

