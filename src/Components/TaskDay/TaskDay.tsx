import React, { useState } from 'react';
import './TaskDay.css';
import { useParams } from 'react-router-dom';
import { TaskDayProps } from './TaskDay.interface';

const useInput = (updateDay: any, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value: value,
      onChange: (event: any) => {
        setValue(event.target.value);
        updateDay(event.target.value);
      },
    },
    value: () => value,
  };
};

const TaskDay = ({ tasks, update }: TaskDayProps) => {
  const params = useParams();
  const taskNumber = params?.id + '';
  const input = useInput(update, tasks?.find((task: any) => task.id === taskNumber)?.day);

  React.useEffect(() => {
    update(input.value());
  }, []);

  return (
    <div className="taskDay">
      <input type="date" {...input.bind} />
    </div>
  );
};

export default TaskDay;
