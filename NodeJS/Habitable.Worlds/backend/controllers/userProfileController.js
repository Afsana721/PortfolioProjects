/* Use this controller file to grab user prfile & user post data*/
const post = require('../models/userModel');

//Use multer object to handle image data
const multer = require("multer");

//Setup multer storage config, how image will be saved.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

//hanle user post data 
const getUserPostData = async function (req, res) {
    //extract post data from req object, extract and create new instance of model
    try {
        //create an instance of post model and extract req's user input properties. 
        const newPost = new post({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            //image takes from req object, if its a file then takes by file name or it would be null. 
            image: req.file ? req.file.filename : null
        });
        //user await operator to handle async function to wait execution context to  get response.
        //newPost is a model of mongoose and it goes to db and user the save function. 
        await newPost.save(); // save user post 
        return res.status(200).json({
            message: "User post is saved."
        })
    } catch (error) {
        return res.status(500).json({
            message: "Sever error. Please try again."
        });
    };
};

module.exports = {
    getUserPostData
}