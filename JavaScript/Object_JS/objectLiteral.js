//create an object 
const person = {
    name: 'Asef', 
    age: 13,
    school: 'Austin School',
    address: {
        city: 'Austin',
        state: 'Texas',
        road: {
            roadLocation: "North 420",
            house: 'house 2'
        }
    }
}

//grab person's some info from memory to make a reference
const personInfo = person.name + ', '+ person.age + ', '+person.school
+', '+person.address.city + ', '+ person.address.state+', '+person.address.road;
console.log(personInfo);
const personHome = person.address.road.roadLocation +', '
+ person.address.road.house;
console.log(personHome);

const person2 = {
    fname: 'Asef',
    lname: 'Khan',
    greet: function() {
        console.log('Hello, ' + this.fname+' '+this.lname);
    }
}
//call the greet method to make a reference by the object 
person2.greet();

/* to grab object properties we can use the bracket notation (or computed member 
access operator) in JavaScript.*/
console.log(person2['fname'] +' '+ person2['lname']);
const skill = 'Subject';
person2[skill] = 'Math'; 
console.log(person2.Subject);
