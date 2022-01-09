import React from 'react';
import './Days.css';
import Day from '../Day/Day';
import Loader from '../Loader/Loader';
import { DaysProps } from './Days.interfaces';

const Days = ({ days }: DaysProps) => {
  return (
    <div className="Days">
      {days.length === 0 ? (
        <Loader />
      ) : (
        days?.map((el: { id: number; day: number }) => <Day key={el.id} day={el} />)
      )}
    </div>
  );
};

export default Days;
