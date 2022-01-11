import React from 'react';
import './Footer.css';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Paths } from '../../contents/routes';
import { FooterProps } from './Footer.interfaces';

const Footer = ({ tasks, addTask, update, updatedTask }: FooterProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const taskNumber = params['*']?.slice(5, params['*']?.length);

  const newTask = () => {
    navigate(Paths.NEW);
  };

  const addTaskPromise = () => {
    return new Promise((resolve) => {
      resolve(addTask((tasks.length + 1).toString()));
    });
  };

  const updateTask = () => {
    if (updatedTask?.name.length === 0) {
      alert('enter name');
    } else if (updatedTask?.text.length === 0) {
      alert('enter text');
    } else if (updatedTask?.day.length < 10) {
      alert('enter date');
    } else {
      update(taskNumber);
    }
  };

  const saveTask = () => {
    if (updatedTask?.name.length === 0) {
      alert('enter name');
    } else if (updatedTask?.text.length === 0) {
      alert('enter text');
    } else if (updatedTask?.day.length < 10) {
      alert('enter date');
    } else {
      addTaskPromise()
        .then(update((tasks.length + 1).toString()))
        .then(() => navigate(Paths.ROOT));
    }
  };

  return (
    <Routes>
      <Route
        path={Paths.TASK_ID}
        element={
          <div className="footer">
            <button onClick={updateTask}>Update</button>
          </div>
        }
      />
      <Route
        path={Paths.NEW}
        element={
          <div className="footer">
            <button onClick={saveTask}>Save</button>
          </div>
        }
      />
      <Route
        path={Paths.OTHER}
        element={
          <div className="footer">
            <button onClick={newTask}>Add a new Task</button>
          </div>
        }
      />
      <Route path="*" element={<Navigate to={Paths.ROOT} />} />
    </Routes>
  );
};
export default Footer;
