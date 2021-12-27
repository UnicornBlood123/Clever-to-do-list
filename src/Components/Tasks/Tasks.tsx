import React, {useState} from 'react';
import './Tasks.css';
import Task from "../Task/Task";
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";


function Tasks({tasks,loading,update}:any) {
    const paramsId = useParams().id;
    const [value, setValue] = useState<boolean[]>([]);
    const [load, setLoad] = useState<boolean[]>([]);
    const data: any = [];
    let count = 0;

    React.useEffect(() => {
        update(value,paramsId)
    });

    if (loading) {
        return (
            <Loader/>
        );
    } else {
        tasks?.forEach((task:any,i:number) => {
            if(!load[count]) {
                setValue( (current:boolean[]) => [...current,task.done])
                setLoad( (current:boolean[]) => [...current,true])
            }
            if(task.day===paramsId) {
                count++;
                data.push(
                    <div key={task.id} className="TaskLine">
                        <input type="checkbox" id={i.toString()} checked={value[i]} onChange={e => {setValue(
                            (current:boolean[]) => {
                                return [...current.slice(0,i),e.target.checked,...current.slice(i+1,current.length+1)]
                            })
                        }}/>
                        {<Task id={task.id} name={task.name}/>}
                    </div>
                )
            }else if (!paramsId && task.day === '10') {
                count++;
                data.push(
                    <div key={task.id}  className="TaskLine">
                        <input type="checkbox" id={i.toString()} checked={value[i]} onChange={e => setValue(
                            (current:boolean[]) => {
                                return [...current.slice(0,i),e.target.checked,...current.slice(i+1,current.length+1)]
                            })

                        }/>
                        {<Task id={task.id} name={task.name}/>}
                    </div>
                );
            }
        })
        return (
            <div className="Tasks">
                <div>{count} Tasks today</div>
                {data}
            </div>
        );
    }
}


export default Tasks;

