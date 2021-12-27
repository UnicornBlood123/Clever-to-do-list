import React from 'react';
import './Day.css';
import {NavLink} from "react-router-dom";

function Day({day}:{day:number}) {
  return (
      <NavLink to={'/day/'+day.toString()} className={({ isActive }) =>(isActive ? "Day Active" : "Day InActive")}><p>{day}</p></NavLink>
  );
}

export default Day;
