//Define Data Structure as an Array with two objects. 
const users = [
    {id: 1, name: 'Asef', age: 13},
    {id: 2, name: 'Khan', age: 52}
];
//console.log(users);

//Create Functions to Access Array data to get and modify data that means use them.

function getUserById(id) {
    //takes the array and use its prototype chain method find() to find its item.
    return users.find((item) => item.id === id );
};
//console.log(getUserById(1));

function addUser(name, age) {
    const newUser = { id: users.length +1, name, age }; //create new user
    //add newUser inside the Array as its item. 
    users.push(newUser);
    return newUser;
};

console.log(addUser('Masud', '50'));