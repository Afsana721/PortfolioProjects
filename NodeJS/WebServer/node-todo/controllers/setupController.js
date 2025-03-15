// Import the Todos model from the models folder
const Todos = require('../models/todomodel');

module.exports = function(app) {
    // Define a route to set up initial todos in the database
    app.get('/api/setupTodos', async function(req, res) {
        // Define an array of starter todo items to seed the database
        const starterTodo = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn mongodb',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Work with project',
                isDone: false,
                hasAttachment: false
            }
        ];

        try {
            // Use Mongoose's create() method to insert the starter todos into the database
            // `await` ensures the function waits for the database operation to complete
            const results = await Todos.create(starterTodo);
            
            // Send the inserted todo items back to the client as a response
            res.send(results);
            console.log(results);
        } catch (err) {
            // If an error occurs, send a 500 status and the error message
            res.status(500).send(err.message);
        }
    });
};



