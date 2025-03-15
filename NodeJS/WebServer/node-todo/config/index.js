//grab config.json to get database credential.
const configValue = require('./config.json');
    

//export this object.
module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValue.uname + ':' + configValue.pwd + 
        '@node-todos.c0bkh.mongodb.net/';
    }
}
