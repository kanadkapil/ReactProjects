import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [task, setTask] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAdd = () => {
        if (task.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        setLoading(true);
        setError(null);

        axios
            .post('http://localhost:3000/todos', { task: task, done: false })
            .then((res) => {
                console.log(res);
                setTask("");
            })
            .catch((err) => {
                console.error(err);
                setError("An error occurred while adding the task.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-md transition transform hover:scale-105">
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button 
                    type="button" 
                    className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-all disabled:opacity-50 text-lg"
                    onClick={handleAdd}
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add"}
                </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
}

export default Create;
