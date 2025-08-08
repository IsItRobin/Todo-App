import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask(""); // Clear input
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  return (
  <>
    <Navbar /> {/* This renders your top nav */}
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Add your task</h1>

      <div className="mb-6 flex justify-center gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-64"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2 max-w-md mx-auto">
        {taskList.map((item, index) => (
          <li
            key={index}
            className="flex items-center bg-white p-3 rounded-xl shadow"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckboxChange(index)}
              className="mr-3"
            />
            <span
              className={`text-lg ${
                item.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </>
);
}

export default App;
