import React, {useState} from 'react';
import './TaskName.css';
import {useParams} from "react-router-dom";

function useInputName(defaultValue='') {
    const [value, setValue] = useState(defaultValue);

    return{
        bind:{
            value,
            onChange: (event:any) => setValue(event.target.value)
        },
        value: () => value
    }
}

function useInputCheck(defaultValue:boolean=false) {
    const [check, setCheck] = useState<boolean>(defaultValue);

    return {
        bind: {
            checked: check,
            onChange: (event: any) => setCheck(event.target.checked)
        },
        value: () => check
    }
}

function TaskName({tasks, updateName, updateCheck}: any) {
    const params = useParams();
    const taskNumber = params?.id + '';
    const inputName = useInputName(tasks?.[+taskNumber - 1]?.name);
    const inputCheck = useInputCheck(tasks?.[+taskNumber - 1]?.done);
    React.useEffect(() => {
        updateName(inputName.value())
        updateCheck(inputCheck.value())
    });

    return (
        <div className="TaskName">
            <input type="checkbox" {...inputCheck.bind}/>
            <textarea placeholder="name" cols={31} rows={1} {...inputName.bind}/>
        </div>
    );

}

export default TaskName;
