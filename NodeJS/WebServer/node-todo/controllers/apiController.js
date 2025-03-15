//grab Todos model 
const Todos = require('../models/todomodel');
//to parse our request and send response as different data types, use body-parser
const bodyParser = require('body-parser');

//create a function, pass app, so app can ability to use http calls. 
module.exports = function (app) {

    //use middleware to convert http request body.  
    app.use(bodyParser.json());
    /*bodyparser can handle URL encoded data, data where certain characters - 
    percent sign, number. */
    app.use(bodyParser.urlencoded({ extended: true }));

    //create API Endpoints to use HTTP calls 

    //use api endpoints username - GET  
    app.get('/api/todos/:uname', async (req, res) => {
        try {
            const todos = await Todos.find({ username: req.params.uname });
            res.send(todos);
        } catch (err) {
            res.status(500).send({ error: 'Error fetching todos' });
        }
    });


    //use api endpoints ID - GET 
    // use api endpoints ID - GET 
    app.get('/api/todo/:id', async (req, res) => {
        try {
            const todo = await Todos.findById(req.params.id);
            res.send(todo);
        } catch (err) {
            res.status(500).send({ error: 'Error fetching todo' });
        }
    });

    //add data to database / add new todos 
    app.post('/api/todo', async (req, res) => {
        try {
            if (req.body.id) {
                await Todos.findByIdAndUpdate(req.body.id, {
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                });
                res.send("Success update");
            } else {
                const newTodo = new Todos({
                    username: 'test',
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                });
                await newTodo.save();
                res.send('Success newTodo');
            }
        } catch (err) {
            res.status(500).send({ error: 'Error processing todo' });
        }
    });

    // Deleting todos from mongodb 
    app.delete('/api/todo', async (req, res) => {
        try {
            const todo = await Todos.findByIdAndDelete(req.body.id); // Read from body
            if (!todo) {
                return res.status(404).send({ error: 'Todo not found' });
            }
            res.send({ message: "Successfully deleted", todo });
        } catch (err) {
            res.status(500).send({ error: 'Error deleting todo' });
        }
    });

}