import React from 'react';
import './TaskList.css';
import Tasks from "../Tasks/Tasks";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import TaskText from '../TaskText/TaskText';
import Loader from "../Loader/Loader";


const TaskList = ({tasks, loading, updateText, updateCheck}: any) => {
    const params = useParams();
    const dayNumber = params['*']?.slice(4,params['*']?.length);

    const currentDayTasks = () => {
        return tasks?.filter((task: any) => task?.day === dayNumber)
    }

    return (
        <div className="TaskList">
            {
                loading ? <Loader/> :
                    <Routes>
                        <Route index element={<div>Choose a day</div>}/>
                        <Route path="day/:id" element={<Tasks tasks={tasks} currentDayTasks={currentDayTasks} update={updateCheck}/>}/>
                        <Route path='task/:id' element={<TaskText tasks={tasks} update={updateText}/>}/>
                        <Route path="*" element={<Navigate to={'/'}/>}/>
                    </Routes>
            }
        </div>
    );
}

export default TaskList;
