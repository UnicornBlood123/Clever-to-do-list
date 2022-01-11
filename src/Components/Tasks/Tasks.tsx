import React, { useState } from 'react';
import './Tasks.css';
import Task from '../Task/Task';
import { useParams } from 'react-router-dom';
import { TasksProps } from './Tasks.interface';

const useInputValue = (defaultValue: any[] = []) => {
  const [check, setCheck] = useState<any[]>(defaultValue);

  return {
    bind: {
      onChange: (event: any) => {
        setCheck((current: boolean[]) => {
          return [
            ...current.slice(0, +event.target.id),
            event.target.checked,
            ...current.slice(+event.target.id + 1, current.length + 1),
          ];
        });
      },
    },
    value: (i: number) => check[i],
    values: () => check,
  };
};

const Tasks = ({ tasks, currentDayTasks, update }: TasksProps) => {
  const paramsId = useParams().id;
  const input = useInputValue(tasks.map((task: any) => task.done));

  React.useEffect(() => {
    update(input.values(), paramsId);
  });

  return (
    <div className="tasks">
      <div className="amountTask">{currentDayTasks().length} Tasks today</div>
      {tasks?.map((task: any, i: number) => {
        if (task?.day === paramsId) {
          return (
            <div key={i} className="taskLine">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox"
                id={i.toString()}
                checked={input.value(i)}
                {...input.bind}
              />
              <label htmlFor={i.toString()}> {<Task id={task.id} name={task.name} />}</label>
            </div>
          );
        } else return null;
      })}
    </div>
  );
};

export default Tasks;
