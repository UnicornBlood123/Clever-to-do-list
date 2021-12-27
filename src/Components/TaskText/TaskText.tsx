import React, {useState} from 'react';
import './TaskText.css';
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

function TaskText({tasks, update}: any) {
    const params = useParams();
    const taskNumber = params?.id + '';
    const input = useInputValue(tasks?.[+taskNumber - 1]?.text)

    React.useEffect(() => {
        update(input.value())
    });

    return (
        <div className="TaskText">
            <textarea placeholder="text" cols={33} rows={15} {...input.bind}/>
        </div>
    );

}

export default TaskText;
