
//create a callback to define get homepage with dynamic css file.
const getHomePage = function(req, res) {
    //use index.css file 
    const CSS = '/CSS/index.css';

    res.render('index', { CSS : CSS });
}



module.exports = {
    getHomePage: getHomePage
}