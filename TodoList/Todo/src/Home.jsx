import React, { useState, useEffect } from 'react';
import Create from './Create';
import axios from 'axios';

function Home() {
    const [todo, setTodo] = useState([]);

    function getTodo() {
        fetch('http://localhost:3000/getTodos')
            .then((res) => res.json())
            .then((data) => {
                setTodo(data);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then(() => getTodo())
            .catch((err) => console.error(err));
    };

    const handleToggleDone = (id) => {
        axios.patch(`http://localhost:3000/todos/${id}`)
            .then(() => getTodo())
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getTodo();
    }, [todo]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold text-white mb-6">Todo List</h1>
            <Create />
            <div className="w-full max-w-md mt-6">
                {todo.length === 0 ? (
                    <p className="text-gray-200 text-center text-lg">No todos yet, add one!</p>
                ) : (
                    todo.map((todoItem) => (
                        <div 
                            key={todoItem._id} 
                            className={`bg-white p-4 rounded-lg shadow-lg mb-3 flex items-center justify-between transition transform hover:scale-105 ${todoItem.done ? 'line-through text-gray-500' : ''}`}
                        >
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="checkbox" 
                                    checked={todoItem.done} 
                                    onChange={() => handleToggleDone(todoItem._id)}
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <p className="text-gray-800 font-medium">{todoItem.task}</p>
                            </div>
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                                onClick={() => handleDelete(todoItem._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;