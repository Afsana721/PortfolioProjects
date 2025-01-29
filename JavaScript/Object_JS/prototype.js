const person = {
    fName: 'Asef',
    lName: 'Khan',
    age: 13, 
    greet: function() {
        console.log('Hello  , '+ this.fName + ' '+ this.lName);
    }
}
const person2 = Object.create(person);
console.log(person2.fName + ', '+ person2.lName+', '+ person2.age);
person2.greet();

function john(name, job) {
    this.name = name; 
    this.job = job;

}
const Jack = new john('Asef', 'student'); 
console.log(Jack);
console.log(Jack.name);
console.log(Jack.job);

function john2(name, job) {
    this.name = name;
    this.job = job;

    this.details = function() {
        console.log(` Your are ${name} and your are a ${job}`);
    }
}

john2.prototype.greet = function() {
    console.log('Hello,  ' + this.name +'!!.');
}
const asef = new john2('Asef', 'Student');
asef.details();
asef.greet();
