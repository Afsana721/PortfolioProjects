
//define a getRegisterPage function as a callback 
const getRegisterPage = function (req, res ) {
    const CSS = "/CSS/register.css";
    res.render('register', { CSS: CSS });

};

//define a getLoginPage function as a callback to attached login pase as request.
const getLoginPage = function( req, res ) {
    const CSS = "/CSS/login.css";
    res.render('login', { CSS : CSS });
}

module.exports = {
    getRegisterPage, 
    getLoginPage
}