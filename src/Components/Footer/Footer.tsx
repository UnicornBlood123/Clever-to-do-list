import React from 'react';
import './Footer.css';
import {Navigate, Route, Routes, useNavigate, useParams} from "react-router-dom";

function Footer({tasks,add,update}:any) {
    const navigate = useNavigate();
    const params = useParams();
    const taskNumber = params['*']?.slice(5,params['*']?.length);
    const dayNumber = params['*']?.slice(4,params['*']?.length);
    function newTask() {
        navigate('task/'+(tasks.length+1))
        add(tasks.length+1,dayNumber)
    }
    return (
        <Routes>
            <Route path="task/:id" element={
                <div className="Footer">
                    <button onClick={update.bind(null,taskNumber)}>Save</button>
                </div>
            }/>
            <Route path="/*" element={
                <div className="Footer">
                    <button onClick={newTask}>
                        Add a new Task
                    </button>
                </div>
            }/>
            <Route  path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
    );
}
export default Footer;
