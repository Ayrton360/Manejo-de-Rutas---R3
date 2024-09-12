// src/pages/TaskDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TaskDetail.css';

const TaskDetail = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) return <h2 className="text-center">Tarea no encontrada</h2>;

  const handleMarkAsComplete = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, complete: true } : t
    );
    console.log('setTasks:', setTasks);
    setTasks(updatedTasks);  // Asegúrate de que setTasks es una función
    navigate('/');
  };

  return (
    <div className="task-detail-container">
      <div className="card">
        <h1>{task.title}</h1>
        <p><strong>Descripción:</strong> {task.description}</p>
        <p><strong>Fecha de creación:</strong> {task.date}</p>
        <p><strong>Estado:</strong> {task.complete ? 'Completada' : 'Incompleta'}</p>
        {!task.complete && (
          <button className="btn btn-success" onClick={handleMarkAsComplete}>
            Marcar como completada
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskDetail;
