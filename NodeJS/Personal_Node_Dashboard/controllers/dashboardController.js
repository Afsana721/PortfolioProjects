
const getDashboardPage= function (req, res) {
    const CSS = '/CSS/dashboard.css'
    res.render('dashboard' , { CSS : CSS });
};



module.exports = {
    getDashboardPage
}