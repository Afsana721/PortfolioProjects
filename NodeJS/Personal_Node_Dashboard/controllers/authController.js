const { userdata, notePost } = require('../models/userModel');

//define a getRegisterPage function as a callback 
const getRegisterPage = function (req, res) {
    const CSS = "/CSS/register.css";
    res.render('register', { CSS: CSS });
};

//define a getLoginPage function as a callback to attached login pase as request.
const getLoginPage = function (req, res) {
    const CSS = "/CSS/login.css";
    res.render('login', { CSS: CSS });
}

//get user data from form submission on the req.body 
const getUserData = async function (req, res) {
    formdata = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const user = new userdata(formdata);
    await user.save();
    res.redirect('login');
};


//Getting user login data to match them 
const getUserLoginData = async function (req, res) {

    //retreive user login data from browser
    const loginData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const { username, email, password } = loginData;
    try {
        const user = await userdata.findOne({ username });

        if (user && user.password === password) {
            req.session.userId = user._id; // stores the user's ID in session
            console.log('Login successful for user:', username);
            res.redirect('/dashboard');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        res.status(500).send('Something went wrong, so try again later.');
    }
};

//user post data retrieve from express-session
const getUserPostData = async function (req, res) {
    //Get user info from session
    const user = req.session.user;

    //if user not available in 
    if (!user) {
        return res.status(401).send("Unsuthorized: Please log in first.");
    }

    //Collect posted data from the dom from 
    const postedData = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        postedBy: user._id
    };

    try {
        //Create and save the new note
        const note = new notePost(postedData);
        await note.save();

        //Success response
        res.send("Note saved successfully.");
    }
    catch (error) {
        console.log("Error saving note: " + error);
        res.status(500).send('Server error: could not save note')
    }
};

//User note post edit function 
const userEditNote = async function (req, res) {
    const updatedData = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    };
    const noteId = req.query.id;
    try {
        await notePost.findByIdAndUpdate(noteId, updatedData);
        res.redirect('/dashboard');
    } catch (error) {
        console.log('Error', error);
        res.status(500).send('Failed to edit');
    }
};


module.exports = {
    getRegisterPage,
    getLoginPage,
    getUserData,
    getUserPostData,
    getUserLoginData,
    userEditNote
};