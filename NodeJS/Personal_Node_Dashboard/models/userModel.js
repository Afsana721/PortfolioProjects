const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const userdata = mongoose.model("userdata", userSchema);

// Notes Schema and Model
const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200
    },
    description: {
        type: String,
        required: true,
        maxlength: 8000

    },
    image: {
        type: String
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'userdata',
        required: true
    }
},
    { timestamps: true });

const notePost = mongoose.model('notePost', noteSchema);


module.exports = {
    userdata,
    notePost
};  