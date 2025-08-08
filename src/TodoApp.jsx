import React, { useState } from 'react';
import TodoItems from './Todo-items';
import './TodoApp.css'; // Assuming you have some styles in this file


export default function TodoApp() {
  const [tasks, setTasks] = useState([]);



  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };




  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  

  return (
    <div className="form-container">
        <div className="todo-app">
            <h1>Your To Do</h1>

            <TodoItems
            tasks={tasks}
            onAdd={handleAddTask}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete} />
        </div>
        </div>
         
    
  );
}
