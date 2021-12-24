import React, {useState} from 'react';
import './TaskName.css';
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

function TaskName({tasks,loading,update}:any) {
    const params = useParams();
    const taskNumber = params?.id+'';
    const [value, setValue] = useState('');
    const [load, setLoad] = useState(false);

    React.useEffect(() => {
        update(value)
    }, [value]);

    if (loading) {
        return (
            <Loader/>
        );
    } else {
        if(!load && tasks && tasks?.length >= +taskNumber && +taskNumber>=0) {
            setValue(tasks?.[+taskNumber-1]?.name);
            setLoad(true)
        }
        return (
            <div className="TaskName">
                <textarea placeholder="name" cols={33} rows={1} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        );
    }
}

export default TaskName;
