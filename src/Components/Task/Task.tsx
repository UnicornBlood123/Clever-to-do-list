import React from 'react';
import './Task.css';
import {NavLink} from "react-router-dom";

function Task({name,id}: { name: string,id:string}) {
    return (
        <div className="Task">
            <NavLink to={'/task/'+id}><p>{name}</p></NavLink>
        </div>
    );
}
export default Task;
