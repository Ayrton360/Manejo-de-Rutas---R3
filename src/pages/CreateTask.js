import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css';

const CreateTask = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      complete,
      date: new Date().toISOString().split('T')[0],
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    navigate('/');
  };

  return (
    <div className="create-task-container">
      <h1 className="page-title">Crear Nueva Tarea</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ingrese el título"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ingrese la descripción"
            rows="4"
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="complete"
            className="form-check-input"
            checked={complete}
            onChange={(e) => setComplete(e.target.checked)}
          />
          <label htmlFor="complete" className="form-check-label">¿Completada?</label>
        </div>
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default CreateTask;
