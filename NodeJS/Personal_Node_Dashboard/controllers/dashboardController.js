const multer = require('multer');
const { userdata, notePost } = require('../models/userModel');


// Setup multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const getDashboardPage = async (req, res) => {
    const CSS = '/CSS/dashboard.css';
    if (!req.session.userId) return res.redirect('/login');
    try {
        const editingNoteId = req.query.id || null;
        const notes = await notePost.find({ postedBy: req.session.userId });
        const user = await userdata.findById(req.session.userId);
        
        let note = null;
        if (editingNoteId) {
            note = await notePost.findById(editingNoteId);
        }

        //res.render('dashboard', { CSS, notes, user, editingNoteId, note });
        res.render('dashboard', { CSS, notes, user, editingNoteId, note });
    } catch (error) {
        console.error('Dashboard Load Error:', error);
        res.status(500).send('Server Error');
    }
};

const postUserNote = async (req, res) => {
    if (!req.session.userId) return res.redirect('/login');
    try {
        const newNote = new notePost({
            title: req.body.title,
            description: req.body.description,
            image: req.file ? req.file.filename : null,
            postedBy: req.session.userId
        });
        await newNote.save();
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Post Save Error:', error);
        res.status(500).send('Note save failed');
    }
};

//Grab the request body info 
const getEditData = async function (req, res) {
    const editData = {
        title: req.body.title,
        description: req.body.description,
        image: req.file ? req.file.filename : req.body.existingImage
    };
    //console.log(req.body, req.file, req.query)
    //console.log(editData);
    const queryId = req.body.id;
    //console.log(queryId);
    try {
        await notePost.findByIdAndUpdate(queryId, editData);
        //res.redirect('/dashboard?id=' + queryId); 
        res.redirect('/dashboard');
    } catch (error) {
        console.log("ERROR : " + error);
    }
};

//delete user note post 
const deleteUserPost = async function (req, res ) {
    //request comes with the id - 
        try {
        await notePost.findByIdAndDelete(req.query.id);
        res.redirect('/dashboard');
    }
    catch(error) {
        console.log('Error : ' + error);
    }
}

module.exports = {
    getDashboardPage,
    postUserNote,
    upload, 
    getEditData,
    deleteUserPost
};
