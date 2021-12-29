import React from 'react';
import './Task.css';
import { NavLink } from 'react-router-dom';

const Task = ({ name, id }: { name: string; id: string }) => {
  return (
    <div className="Task">
      <NavLink className="InActive" to={'/task/' + id}>
        <p>{name}</p>
      </NavLink>
    </div>
  );
};
export default Task;
