// src/View1.js
import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../api';

function View1() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTasks();
        setTasks(data.tasks);
      } catch (error) {
        // Handle the error appropriately
      }
    }
    fetchData();
  }, []);

  return (
    <div className="view">
      <h2>View 1 - Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong>
            <ul>
              {task.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default View1;
