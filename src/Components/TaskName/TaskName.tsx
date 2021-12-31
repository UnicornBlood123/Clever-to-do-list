import React, { useState } from 'react';
import './TaskName.css';
import { useParams } from 'react-router-dom';

const useInputName = (updateName: any, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
        updateName(event.target.value);
      },
    },
    value: () => value,
  };
};

const useInputCheck = (updateCheck: any, defaultValue = false) => {
  const [check, setCheck] = useState<boolean>(defaultValue);

  return {
    bind: {
      checked: check,
      onChange: (event: any) => {
        setCheck(event.target.checked);
        updateCheck(event.target.checked);
      },
    },
    value: () => check,
  };
};

const TaskName = ({ tasks, updateName, updateCheck }: any) => {
  const params = useParams();
  const taskNumber = params?.id + '';
  const inputName = useInputName(
    updateName,
    tasks?.find((task: any) => task.id === taskNumber)?.name
  );
  const inputCheck = useInputCheck(
    updateCheck,
    tasks?.find((task: any) => task.id === taskNumber)?.done
  );

  React.useEffect(() => {
    updateCheck(inputCheck.value());
    updateName(inputName.value());
  }, []);

  return (
    <div className="TaskName">
      <input type="checkbox" {...inputCheck.bind} />
      <textarea placeholder="name" cols={31} rows={1} {...inputName.bind} />
    </div>
  );
};

export default TaskName;
