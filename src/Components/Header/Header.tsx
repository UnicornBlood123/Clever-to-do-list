import React from 'react';
import './Header.css';
import {Route, Routes, Navigate, useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }

    return (
        <Routes>
            <Route index element={
                    <div className="Header">Tassker</div>
            }/>
            <Route path="day/:id" element={
                    <div className="Header">Tassker</div>
            }/>
            <Route path="task/:id" element={
                <div>
                    <div className="ButtonHeader">
                        <button onClick={back}>
                            <p>&#8592; Back</p>
                        </button>
                    </div>
                    <div className="Header" style={{marginTop:0}}>Today's Task</div>
                </div>
            }/>
            <Route path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
    );
}

export default Header;
