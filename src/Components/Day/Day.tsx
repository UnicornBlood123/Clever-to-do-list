import React from 'react';
import './Day.css';
import {NavLink} from "react-router-dom";

function Day({day}:{day:number}) {
  return (
    <div className="Day">
        <NavLink to={'/day/'+day.toString()}><p>{day}</p></NavLink>
    </div>
  );
}

export default Day;
