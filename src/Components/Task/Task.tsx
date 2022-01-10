import React from 'react';
import './Task.css';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../contents/routes';
import { TaskProps } from './Task.interface';

const Task = ({ name, id }: TaskProps) => {
  return (
    <div className="task">
      <NavLink className="inActive" to={Paths.TASK + id}>
        <p>{name}</p>
      </NavLink>
    </div>
  );
};
export default Task;
