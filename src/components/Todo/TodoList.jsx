// **Bharath Kumar K**  
// 🔗 [LinkedIn](https://www.linkedin.com/in/bharath-kmr)  
// 📧 bharth.kmrk@gmail.com
// 🛠️ git https://github.com/bharath-kumr

import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!task.trim()) return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = task;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask('');
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
      <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <span>
              <button onClick={() => handleEdit(i)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


