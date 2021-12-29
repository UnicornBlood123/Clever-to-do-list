import React, {useState} from 'react';
import './TaskText.css';
import {useParams} from "react-router-dom";

const useInputValue = (update:any,defaultValue='') =>  {
    const [value, setValue] = useState(defaultValue);

    return{
        bind:{
            value,
            onChange: (event:any) => {
                setValue(event.target.value)
                update(event.target.value)
            }
        },
        value: () => value
    }
}

const TaskText = ({tasks, update}: any) =>  {
    const params = useParams();
    const taskNumber = params?.id + '';
    const input = useInputValue(update,tasks?.[+taskNumber - 1]?.text)

    React.useEffect(() => {
        update(tasks?.[+taskNumber - 1]?.text)
    },[update,tasks,taskNumber]);

    return (
        <div className="TaskText">
            <textarea placeholder="text" cols={33} rows={15} {...input.bind}/>
        </div>
    );

}

export default TaskText;
