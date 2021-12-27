import React, {useState} from 'react';
import './TaskName.css';
import {useParams} from "react-router-dom";

function TaskName({tasks, update}: any) {
    const params = useParams();
    const taskNumber = params?.id + '';
    const [value, setValue] = useState(tasks?.[+taskNumber - 1]?.name);

    React.useEffect(() => {
        update(value)
    });

    return (
        <div className="TaskName">
            <textarea placeholder="name" cols={33} rows={1} value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );

}

export default TaskName;
