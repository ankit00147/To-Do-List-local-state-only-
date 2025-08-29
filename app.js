import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");   // input ke liye
  const [tasks, setTasks] = useState([]); // task list ke liye

  // task add karna
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // input clear
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📝 To-Do List</h2>

      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
