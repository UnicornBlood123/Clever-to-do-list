import React, {useState} from 'react';
import './TaskText.css';
import {useParams} from "react-router-dom";

function TaskText({tasks, update}: any) {
    const params = useParams();
    const taskNumber = params?.id + '';
    const [value, setValue] = useState(tasks?.[+taskNumber - 1]?.text);

    React.useEffect(() => {
        update(value)
    });

    return (
        <div className="TaskText">
            <textarea placeholder="text" cols={33} rows={15} value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );

}

export default TaskText;
