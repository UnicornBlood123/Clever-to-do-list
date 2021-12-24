import React, {useState} from 'react';
import './Days.css';
import Day from "../Day/Day";
import {getDays} from "../../api/loader"

function Days() {
    const [data, setData] = useState<[]>([]);
    React.useEffect(() => {
        getDays().then(result => setData(result as []));
    }, []);
  return (
    <div className="Days">
        {data?.map((el:{id:number,day:number}) => <Day key={el.id} day={el.day}/>)}
    </div>
  );
}

export default Days;
