import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ tasks }) => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <div className="row">
        {tasks.map(task => (
          <div key={task.id} className="col-md-4 mb-4">
            <div className="card task-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text text-muted">{task.description}</p>
                <Link to={`/task/${task.id}`} className="btn btn-outline-primary btn-sm">Ver detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
