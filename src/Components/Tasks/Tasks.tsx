import React, {useState} from 'react';
import './Tasks.css';
import Task from "../Task/Task";
import {useParams} from "react-router-dom";


function Tasks({tasks, update, first}: any) {
    const paramsId = useParams().id;
    const [value, setValue] = useState<boolean[]>(tasks.map((task:any)=>task.done));
    const data: any = [];

    React.useEffect(() => {
        update(value, paramsId)
    });

    tasks?.forEach((task: any, i: number) => {
        if (task.day === paramsId) {
            data.push(
                <div key={task.id} className="TaskLine">
                    <input type="checkbox" id={i.toString()} checked={value[i]} onChange={e => {
                        setValue(
                            (current: boolean[]) => {
                                return [...current.slice(0, i), e.target.checked, ...current.slice(i + 1, current.length + 1)]
                            })
                    }}/>
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

