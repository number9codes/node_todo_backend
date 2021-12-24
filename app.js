//Imports
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const todoController = require('./controllers/todoController');



//Routes API's
app.use(express.json());
app.get('/todos', todoController.getAllTodo);
app.post('/todos', todoController.addTodo);
app.patch('/todos/:todoId',todoController.updateTodoById);
app.delete('/todos/:todoId',todoController.deleteTodoById);
app.get('/todos/:todoId', todoController.getTodoById);

//Listner
app.listen(3000, function() {
    console.log('Server has started');
    mongoose.connect(process.env.LOCAL_DB)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('Db not connected: ',error.message);
    })
});


