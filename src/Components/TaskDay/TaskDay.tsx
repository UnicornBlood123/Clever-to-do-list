import React, { useState } from 'react';
import './TaskDay.css';
import { useParams } from 'react-router-dom';

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

const TaskDay = ({ tasks, update }: any) => {
  const params = useParams();
  const taskNumber = params?.id + '';
  const input = useInput(update, tasks?.[+taskNumber - 1]?.day);

  React.useEffect(() => {
    update(input.value());
  }, []);

  return (
    <div className="TaskDay">
      <input type="date" {...input.bind} />
    </div>
  );
};

export default TaskDay;
