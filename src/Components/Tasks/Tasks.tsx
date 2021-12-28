import React, {useRef, useState} from 'react';
import './Tasks.css';
import Task from "../Task/Task";
import {useParams} from "react-router-dom";

const useInputValue = (defaultValue:boolean[] = []) =>  {
    const [check, setCheck] = useState<boolean[]>(defaultValue);

    return {
        bind: {
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

const Tasks = ({tasks, update}: any) =>  {
    const paramsId = useParams().id;
    const input = useInputValue(tasks.map((task:any)=>task.done));
    const count = useRef(0);

    React.useEffect(() => {
        update(input.values(), paramsId)
    });

    React.useEffect(() => {
       count.current=0
    },[paramsId,input]);


    return (
        <div className="Tasks">
        <div>{count.current} Tasks today</div>
            {
                tasks?.map((task: any, i: number) => {
                    if (task.day === paramsId) {
                        count.current++
                        return (
                            <div key={task.id} className="TaskLine">
                                <input type="checkbox" id={i.toString()} checked={input.value(i)} {...input.bind}/>
                                {<Task id={task.id} name={task.name}/>}
                            </div>
                        );
                    }
                    else{
                        return null
                    }
                })
            }
        </div>
    );

}

export default Tasks;

