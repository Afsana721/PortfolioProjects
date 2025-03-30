const { userdata } = require("../models/userModel");

//forgot page callback 
const getForgotPage = (req, res) => {
    res.render('forgot');
};

//reset password callback 
const getResetUserPassword = async function (req, res) {
    const userEmail = req.body.email;

    // Get the user from DB
    const dbEmaiUser = await userdata.findOne({ email: userEmail });
    
    // Check if user exists
    if (dbEmaiUser === null) {
        console.log('No Found or match');
    } else {
        const username = dbEmaiUser.username;
        res.redirect('/register?username=' + username);
    }
};

module.exports = {
    getForgotPage,
    getResetUserPassword 
};
