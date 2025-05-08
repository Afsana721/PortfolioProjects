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
const upload = multer({ storage });


//hanle user post data 
const saveUserPostData = async function (req, res) {
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
        //use await operator to handle async function to wait execution context to  get response.
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

//handle get post data requst to server 
const getUserPostData = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ message: "Missing userId in request" });
        }
        const userPost = await post.find({ userId: userId });
        return res.status(200).json(userPost);
    } catch (error) {
        return res.status(500).json({
            message: "Server error. Please try again."
        });
    }
};


//Handle Edit user post data 
const getUserEditPostData = async function (req, res) {

    //Extract user PostId to indentify post and edit post data.
    const postId = req.query.id;
    const editPostData = {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        image: req.file ? req.file.filename : null
    };
    try {
        // editPostData is a model of mongoose and it goes to db and identify post by id and save 
        await post.findByIdAndUpdate(postId, editPostData);
        return res.status(200).json({
            message: "Post data is edited."
        })

    } catch (error) {
        return res.status(500).json({
            message: "Server error. Please try again."
        })
    }
};

//Handle delete user post data
const deleteUserPostData = async function (req, res) {
    //Request comes with post id. 
    const postId = req.params.id;
    try {
        await post.findByIdAndDelete(postId);
        return res.status(200).json({
            message: "Post data is deleted."
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error. Please try again."
        })
    }
};

module.exports = {
    saveUserPostData,
    getUserPostData,
    getUserEditPostData,
    deleteUserPostData
};