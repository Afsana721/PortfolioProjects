//create a variable and funciton
const greeting = 'Hello world!!! 6';

function greet() {
    console.log(greeting);
};

/* adding exports object properties or replace and here only exposing 
the function, not greeting variable. So when greet is executed, it will still
have access to this greeting variable because of its lexical environment, but since 
module.exports is what is returned from this module, not won't have direct access to 
the greeting variable outside the module. */
//simple reveal only the function. 
module.exports = {
    greet: greet
};

