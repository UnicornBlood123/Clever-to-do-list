import React from 'react';
import './TaskList.css';
import Tasks from "../Tasks/Tasks";
import {Navigate, Route, Routes} from "react-router-dom";
import TaskText from '../TaskText/TaskText';
import Loader from "../Loader/Loader";


function TaskList({tasks, loading, updateText, updateCheck}: any) {
    if (loading) {
        return (
            <div className="TaskList">
                <Loader/>
            </div>
        );
    } else {
        return (
            <div className="TaskList">
                <Routes>
                    <Route index element={<Tasks tasks={tasks} update={updateText}/>}/>
                    <Route path="day/:id" element={<Tasks tasks={tasks} update={updateCheck}/>}/>
                    <Route path='task/:id' element={<TaskText tasks={tasks} update={updateText}/>}/>
                    <Route path="*" element={<Navigate to={'/'}/>}/>
                </Routes>
            </div>
        );
    }
}

export default TaskList;
