import React from 'react';
import './TaskList.css';
import Tasks from "../Tasks/Tasks";
import {Navigate, Route, Routes} from "react-router-dom";
import TaskText from '../TaskText/TaskText';


function TaskList({tasks,loading,updateText,updateCheck}:any) {
    return (
        <div className="TaskList">
            <Routes>
                <Route index element={<Tasks tasks={tasks} loading={loading} update={updateText}/>} />
                <Route path="day/:id" element={<Tasks tasks={tasks} loading={loading} update={updateCheck}/>}/>
                <Route path='task/:id' element={<TaskText tasks={tasks} loading={loading} update={updateText}/>}/>
                <Route  path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </div>
    );
}

export default TaskList;
