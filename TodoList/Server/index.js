const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const TodoModel = require('./Models/Todo');

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kapil:kapil123@cluster0.itmrefk.mongodb.net/list?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

connectDB();

const port = process.env.PORT || 3000;

// Create a new todo
app.post('/todos', async (req, res) => {
    try {
        const { task } = req.body;
        if (!task) {
            return res.status(400).json({ message: "Task is required" });
        }
        const newTodo = new TodoModel({ task, done: false });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: "Error adding todo", error });
    }
});

// Get all todos
app.get("/getTodos", async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        await TodoModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
});

// Toggle done status of a todo
app.patch("/todos/:id", async (req, res) => {
    try {
        const todo = await TodoModel.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        todo.done = !todo.done;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
