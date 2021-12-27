import React, {useState} from 'react';
import './Tasks.css';
import Task from "../Task/Task";
import {useParams} from "react-router-dom";

function useInputValue(defaultValue:boolean[] = []) {
    const [check, setCheck] = useState<boolean[]>(defaultValue);

    return {
        bind: {
            check,
            onChange: (event: any) => {
                setCheck((current: boolean[]) => {
                    return [...current.slice(0, +event.target.id), event.target.checked, ...current.slice(+event.target.id + 1, current.length + 1)]
                })
            }
        },
        value: (i:number) => check[i],
        values: () => check
    }
}

function Tasks({tasks, update}: any) {
    const paramsId = useParams().id;
    const input = useInputValue(tasks.map((task:any)=>task.done));
    const data:any = [];

    React.useEffect(() => {
        update(input.values(), paramsId)
    });

    tasks?.forEach((task: any, i: number) => {
        if (task.day === paramsId) {
            data.push(
                <div key={task.id} className="TaskLine">
                    <input type="checkbox" id={i.toString()} checked={input.value(i)} {...input.bind}/>
                    {<Task id={task.id} name={task.name}/>}
                </div>
            )
        }
    })
    return (
        <div className="Tasks">
            <div>{data.length} Tasks today</div>
            {data}
        </div>
    );
}


export default Tasks;



