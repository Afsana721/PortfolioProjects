// pass by value
function change(b) {
    b =2; 
    console.log(b);
}
var a = 1; 
change(a);
console.log(a);

var age = 13;
var newAge = age;
console.log("AGE is : " +age);
console.log("newAGE is : " +newAge);
age = 26;
console.log("AGE changed : " + age);
console.log("newAGE not changed : " + newAge);
newAge = 8; 
console.log("AGE not changed : " + age);
console.log("newAGE changed : " + newAge);

// pass by reference -
function changeObject(obj) {
    obj.prop1 = function() { };
    obj.prop2 = {};
}
// create a new empty object
const c = {};
c.prop1 = {};

//call changeObject() and pass c object
changeObject(c);
/*So c object has prop1 but it's an empty object, not a function. So it takes the
obj.prop1 that is a function, overwrites what the property is and adds a new one. 
So the property has been changed to a function and a new property has been added. 
Because when I call changeObject function, this obj value, the obj parameter variable
points to the same memory location that c points to. Because it's passed  by reference. 
So whatever I did to obj that affected c object. Because it's the same object 
in memory*/
console.log(c);