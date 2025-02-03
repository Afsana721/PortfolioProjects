// IIFE - immediately invoked function expression. Create and invokes on the fly. 
var fName = 'Khan';

(function (lName) {
    var fName = "Asef";
    console.log(fName +' '+lName);
}("Khan"));
/*not changing variable, so to avoid collision, because we wrapped our code in an
IIFE, and so it's protected.*/

console.log(fName);
  