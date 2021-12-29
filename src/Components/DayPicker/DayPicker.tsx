import React from 'react';
import Days from '../Days/Days';
import './DayPicker.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import TaskName from '../TaskName/TaskName';
import Loader from '../Loader/Loader';
import TaskDay from '../TaskDay/TaskDay';

const DayPicker = ({ tasks, loading, updateName, updateCheck, updateDay }: any) => {
  return (
    <div className="DayPicker">
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route index element={<Days />} />
          <Route path="day/:id" element={<Days />} />
          <Route
            path="task/:id"
            element={
              <div className="TaskPlaces">
                <TaskName tasks={tasks} updateName={updateName} updateCheck={updateCheck} />
                <TaskDay tasks={tasks} update={updateDay} />
              </div>
            }
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      )}
    </div>
  );
};

export default DayPicker;
