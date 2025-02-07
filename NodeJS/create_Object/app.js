//create an object 
var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' '+ this.lastname;
    }
}

//create an object 
var asef = Object.create(person);
//asef is an empty object. 
console.log(asef);
asef['firstname'] = 'Asef';
asef.lastname = 'Khan';
console.log(asef);
console.log(asef.greet());
console.log(asef);




