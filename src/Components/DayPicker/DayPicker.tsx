import React, { useState } from 'react';
import './DayPicker.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import TaskName from '../TaskName/TaskName';
import Loader from '../Loader/Loader';
import TaskDay from '../TaskDay/TaskDay';
import Days from '../Days/Days';
import { getDays } from '../../api/loader';
import { Paths } from '../../contents/routes';
import { DayPickerProps } from './DayPicker.interfaces';

const DayPicker = ({ tasks, loading, updateName, updateCheck, updateDay }: DayPickerProps) => {
  const [days, setDays] = useState<any>([]);

  React.useEffect(() => {
    getDays().then((res) => setDays(res));
  }, []);

  React.useEffect(() => {
    if (days.length > 0) {
      days.forEach((day: any, i: number) => {
        tasks?.some((task: any) => {
          day.haveTask = 0;
          if (task.day === day.day) {
            day.haveTask = 1;
            if (task.done) {
              day.haveDoneTask = 1;
              return true;
            } else day.haveDoneTask = 0;
          }
        });
        tasks?.some((task: any) => {
          if (task.day === day.day) {
            day.haveTask = 1;
            if (!task.done) {
              day.haveNoDoneTask = 1;
              return true;
            } else day.haveNoDoneTask = 0;
          }
        });
        setDays((prev: any) => {
          return [...prev.slice(0, i), day, ...prev.slice(i + 1, prev.length + 1)];
        });
      });
    }
  }, [updateCheck]);

  return (
    <div className="DayPicker">
      {loading && days.length === 0 ? (
        <Loader />
      ) : (
        <Routes>
          <Route index element={<Days days={days} />} />
          <Route path={Paths.DAY_ID} element={<Days days={days} />} />
          <Route
            path={Paths.TASK_ID}
            element={
              <div className="TaskPlaces">
                <TaskDay tasks={tasks} update={updateDay} />
                <TaskName tasks={tasks} updateName={updateName} updateCheck={updateCheck} />
              </div>
            }
          />
          <Route path="*" element={<Navigate to={Paths.ROOT} />} />
        </Routes>
      )}
    </div>
  );
};

export default DayPicker;
