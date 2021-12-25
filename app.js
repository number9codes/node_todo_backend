//Imports
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 3000;


//Routes API's
app.use(express.json());
app.get('/', funvtion(res,req)(
    res.status(200).json({message: 'Welcome to numba9 todo api'})
));
app.get('/todos', todoController.getAllTodo);
app.post('/todos', todoController.addTodo);
app.patch('/todos/:todoId',todoController.updateTodoById);
app.delete('/todos/:todoId',todoController.deleteTodoById);
app.get('/todos/:todoId', todoController.getTodoById);

//Listner
app.listen(PORT, function() {
    console.log('Server has started');
    mongoose.connect(process.env.LOCAL_DB)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('Db not connected: ',error.message);
    })
});


