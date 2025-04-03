const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
});


// we can take const here 
module.exports = mongoose.model('Todo', todoSchema);        