import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';
import CreateTask from './pages/CreateTask';
import tasksData from './tasksData';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <Router>
      <header className="header">
        <nav className="navigation">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/create" className="nav-link">Crear tarea</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route path="/create" element={<CreateTask setTasks={setTasks} />} />
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} setTasks={setTasks} />} />
        </Routes>
    </Router>
  );
}

export default App;
