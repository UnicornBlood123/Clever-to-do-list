import React from 'react';
import './TaskList.css';
import Tasks from '../Tasks/Tasks';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import TaskText from '../TaskText/TaskText';
import Loader from '../Loader/Loader';
import { Paths } from '../../contents/routes';
import { TaskListProps } from './TaskList.interface';

const TaskList = ({ tasks, loading, updateText, updateCheck }: TaskListProps) => {
  const params = useParams();
  const dayNumber = params['*']?.slice(4, params['*']?.length);

  const currentDayTasks = () => {
    return tasks?.filter((task: any) => task?.day === dayNumber);
  };

  return (
    <div className="TaskList">
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route index element={<div>Choose a day</div>} />
          <Route
            path={Paths.DAY_ID}
            element={<Tasks tasks={tasks} currentDayTasks={currentDayTasks} update={updateCheck} />}
          />
          <Route path={Paths.TASK_ID} element={<TaskText tasks={tasks} update={updateText} />} />
          <Route path="*" element={<Navigate to={Paths.ROOT} />} />
        </Routes>
      )}
    </div>
  );
};

export default TaskList;
