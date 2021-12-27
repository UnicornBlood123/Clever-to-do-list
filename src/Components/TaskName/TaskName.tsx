import React, {useState} from 'react';
import './TaskName.css';
import {useParams} from "react-router-dom";

function useInputValue(defaultValue='') {
    const [value, setValue] = useState(defaultValue);

    return{
        bind:{
            value,
            onChange: (event:any) => setValue(event.target.value)
        },
        value: () => value
    }
}

function TaskName({tasks, update}: any) {
    const params = useParams();
    const taskNumber = params?.id + '';
    const input = useInputValue(tasks?.[+taskNumber - 1]?.name);

    React.useEffect(() => {
        update(input.value())
    });

    return (
        <div className="TaskName">
            <textarea placeholder="name" cols={33} rows={1} {...input.bind}/>
        </div>
    );

}

export default TaskName;
