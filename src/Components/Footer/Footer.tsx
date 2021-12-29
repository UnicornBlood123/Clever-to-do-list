import React from 'react';
import './Footer.css';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const Footer = ({ tasks, addTask, update, updatedTask }: any) => {
  const navigate = useNavigate();
  const params = useParams();
  const taskNumber = params['*']?.slice(5, params['*']?.length);

  const newTask = () => {
    navigate('task/' + (tasks.length + 1));
  };

  const addTaskPromise = () => {
    return new Promise((resolve) => {
      resolve(addTask(tasks.length + 1));
    });
  };

  const updateTask = () => {
    if (updatedTask?.name.length === 0) {
      alert('enter name');
    } else if (updatedTask?.text.length === 0) {
      alert('enter text');
    } else {
      update(taskNumber);
    }
  };

  const saveTask = () => {
    if (taskNumber && tasks.length < +taskNumber) {
      addTaskPromise().then(() => {
        updateTask();
      });
    } else {
      updateTask();
    }
  };

  return (
    <Routes>
      <Route
        path="task/:id"
        element={
          <div className="Footer">
            <button onClick={saveTask}>Save</button>
          </div>
        }
      />
      <Route
        path="/*"
        element={
          <div className="Footer">
            <button onClick={newTask}>Add a new Task</button>
          </div>
        }
      />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
export default Footer;
