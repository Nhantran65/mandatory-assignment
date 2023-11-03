import React from 'react';
import './App.css'; // You can include your CSS styles here
import TaskList from './components/Tasklists';

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList />
    </div>
  );
}

export default App;
