import React from 'react';
import Days from '../Days/Days';
import './DayPicker.css';
import {Route, Routes, Navigate} from "react-router-dom";
import TaskName from "../TaskName/TaskName";
import Loader from "../Loader/Loader";

function DayPicker({tasks,loading,update}:any) {
    if (loading) {
        return (
            <div className="DayPicker">
                <Loader/>
            </div>
        );
    }
    else {
        return (
            <div className="DayPicker">
                <Routes>
                    <Route index element={<Days/>}/>
                    <Route path="day/:id" element={<Days/>}/>
                    <Route path="task/:id" element={<TaskName tasks={tasks} update={update}/>}/>
                    <Route path="*" element={<Navigate to={'/'}/>}/>
                </Routes>
            </div>
        );
    }
}

export default DayPicker;
