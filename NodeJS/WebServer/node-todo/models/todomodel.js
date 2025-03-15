//grab mongoose module on NPM registry to handle database. 
const mongoose = require('mongoose');

//Make a reference of the Schema function. 
const Schema = mongoose.Schema; 

//now create userSchema with its data structures and types.
const todoSchema = new Schema( {
    username: String, 
    todo: String, 
    isDone: Boolean,
    hasAttachment:Boolean
});

//Create todo users data model, what actual data
const Todos = mongoose.model('Todos', todoSchema);

//export this todos to others or where we need.
module.exports = Todos;