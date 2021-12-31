import React from 'react';
import './Day.css';
import { NavLink } from 'react-router-dom';

const Day = ({ day }: { day: any }) => {
  return (
    <div>
      <NavLink
        to={'/day/' + day.day.toString()}
        className={({ isActive }) => (isActive ? 'Day Active' : 'Day InActive')}
      >
        <p>{day.day.toString().slice(-2)}</p>
      </NavLink>
      <div className="Circles">
        <div className={day.haveNoDoneTask > 0 && day.haveTask > 0 ? 'Circle NoDone' : 'Circle'} />
        <div className={day.haveDoneTask > 0 && day.haveTask > 0 ? 'Circle Done' : 'Circle'} />
      </div>
    </div>
  );
};

export default Day;
