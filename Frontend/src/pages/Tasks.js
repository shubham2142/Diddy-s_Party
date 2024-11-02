import React, { useState, useEffect } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from your API
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task._id} className="border-b py-2">{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
