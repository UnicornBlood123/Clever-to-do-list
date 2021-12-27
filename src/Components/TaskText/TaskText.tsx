import React, {useState} from 'react';
import './TaskText.css';
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

function TaskText({tasks,loading,update}:any) {
    const params = useParams();
    const taskNumber = params?.id+'';
    const [value, setValue] = useState('');
    const [load, setLoad] = useState(false);

    React.useEffect(() => {
        update(value)
    });

    if (loading) {
        return (
            <Loader/>
        );
    } else {
        if(!load && tasks && tasks?.length >= +taskNumber && +taskNumber>=0) {
            setValue(tasks?.[+taskNumber-1]?.text);
            setLoad(true)
        }
        return (
            <div className="TaskText">
                <textarea placeholder="text" cols={33} rows={15} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        );
    }
}

export default TaskText;
