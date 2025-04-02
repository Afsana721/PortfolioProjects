const { userdata } = require("../models/userModel");

//forgot page callback 
const getForgotPage = (req, res) => {
    res.render('forgot');
};

// reset password callback 
const getResetUserPassword = async function (req, res) {
    const userEmail = req.body.email;

    try {
        // Get the user from DB
        const dbEmaiUser = await userdata.findOne({ email: userEmail });

        // Check if user exists
        if (!dbEmaiUser) {
            console.log('No match found');
            return res.status(404).send('Email not found');
        }

        // Send username and email to register page (to reset password only)
        const username = dbEmaiUser.username;
        res.render('register', {
            username,
            email: userEmail,
            CSS: '/CSS/register.css'
        });
    } catch (error) {
        console.error('Error during password reset:', error);
        res.status(500).send('Server error');
    }
};


module.exports = {
    getForgotPage,
    getResetUserPassword 
};
