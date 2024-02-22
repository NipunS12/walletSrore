// Import React and useState hook
import React, { useState } from 'react';

// Functional component for the Todo App
function TodoApp() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to manage the input field for new tasks
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Function to handle removing a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input field for new tasks */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Render the TodoApp component to the root element in the HTML
export default TodoApp;
