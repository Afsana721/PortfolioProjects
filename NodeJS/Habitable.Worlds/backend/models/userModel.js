/* Need mongoose to create user data schema and model. Where Schema is a pattern type and model is what dta we send to Database.*/
const mongoose = require("mongoose");

/* Call Schema funciton to construct new instance of Schema object */
const Schema = mongoose.Schema;

/* Now creae new user login Schema instance to give data pattern */
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: false
    },
    concern: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

/* Create new user post Schema */
const userPostData = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200
    },
    description: {
        type: String,
        required: true,
        maxlength: 8000,
    },
    content: {
        type: String,
        required: true,
        maxlength: 5000
    },
    image: {
        type: String,
        required: false
    }

});

/* Create Model of these three Schema*/
const user = mongoose.model('user', userSchema);
const post = mongoose.model('post', userPostData);


//export them so other files can use them. 
module.exports = {
    user,
    post
};