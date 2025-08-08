// TODOAPP
import React from "react";
import {useState} from "react";
import AddIcon from "./assets/Addicon";
import './TodoApp.css';

function TodoApp() {
    const [tasks, setTasks] = useState("");
    

    const handleonSubmit = (e) => {
        e.preventDefault();
        console.log("Task submitted:", tasks);
    }
    
    return (
        <div className="form-container">
        <div className="todo-app">
            <h1>Your To Do</h1>

            <div className="todo-input-wrapper">
                <input type="text"
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                placeholder="Add a new task" />
                <button className="add-button" onClick={handleonSubmit}>
                    <AddIcon />
                </button>
            </div>
        </div>
        </div>
        
    );
}

export default TodoApp;







// todo-items
import React from 'react';

function TodoItems({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}

export default TodoItems;
