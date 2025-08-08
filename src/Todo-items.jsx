import React, { useState } from 'react';
import AddIcon from "./assets/Addicon";
import DeleteIcon from "./assets/del";
import './Todoitems.css';

export default function TodoItems({ tasks, onAdd, onDelete, onToggleComplete }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div className="todo-wrapper">
      <form onSubmit={handleSubmit} className="todo-input-wrapper">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className="add-button" type="submit">
          <AddIcon />
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>
                {task.text}
              </span>
            </div>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>

      {/* Footer shown once */}
      <div className="footer">
        <p><em>Your remaining todos: {tasks.filter(t => !t.completed).length}</em></p>
        <p>"Doing what you love is the cornerstone of having abundance in your life." – Wayne Dyer</p>
      </div>
    </div>
  );
}
