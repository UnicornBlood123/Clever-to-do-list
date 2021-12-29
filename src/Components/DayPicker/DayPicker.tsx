import React from 'react';
import Days from '../Days/Days';
import './DayPicker.css';
import {Route, Routes, Navigate} from "react-router-dom";
import TaskName from "../TaskName/TaskName";
import Loader from "../Loader/Loader";

const DayPicker = ({tasks, loading, updateName, updateCheck}: any) => {
    return (
        <div className="DayPicker">
            {
                loading ? <Loader/> :
                    <Routes>
                        <Route index element={<Days/>}/>
                        <Route path="day/:id" element={<Days/>}/>
                        <Route path="task/:id"
                               element={<TaskName tasks={tasks} updateName={updateName} updateCheck={updateCheck}/>}/>
                        <Route path="*" element={<Navigate to={'/'}/>}/>
                    </Routes>
            }
        </div>
    );
}

export default DayPicker;
