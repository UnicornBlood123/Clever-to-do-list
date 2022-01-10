import React from 'react';
import './Day.css';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../contents/routes';
import { DayProps } from './Day.interfaces';

const Day = ({ day }: DayProps) => {
  return (
    <div>
      <NavLink
        to={Paths.DAY + day.day.toString()}
        className={({ isActive }) => (isActive ? 'day active' : 'day inActive')}
      >
        <p>{day.day.toString().slice(-2)}</p>
      </NavLink>
      <div className="circles">
        <div className={day.haveNoDoneTask > 0 && day.haveTask > 0 ? 'circle noDone' : 'circle'} />
        <div className={day.haveDoneTask > 0 && day.haveTask > 0 ? 'circle done' : 'circle'} />
      </div>
    </div>
  );
};

export default Day;
