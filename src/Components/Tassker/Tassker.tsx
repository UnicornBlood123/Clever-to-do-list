import React, {useContext} from 'react';
import './Tassker.css';
import Footer from "../Footer/Footer";
import DayPicker from "../DayPicker/DayPicker";
import TaskList from "../TaskList/TaskList";
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";


const Tassker = () =>  {
    const {auth} = useContext<any>(Context);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const {firestore} = useContext<any>(Context);
    const [tasks, loading] = useCollectionData(firestore.collection('tasks'));
    const updateData = {name:'',text:'',done:false}

    const updateText = (text:string) => {
       updateData.text=text;
    }
    const updateName = (name:string) =>  {
        updateData.name=name;
    }

    const updateCheck = (done:boolean) =>  {
        updateData.done=done;
    }

    const updateChecks = (done:[],day:string) =>  {
        if(done.length) {
            return (firestore.collection('tasks').get().then((snapshot: any) => {
                return Promise.all(snapshot.docs?.map((doc: any, i: number) => {
                    if(tasks && tasks[i].day===day) {
                        return doc.ref.update({done: done[i]});
                    }
                    return 0
                }));
            }));
        }
    }
    const updateAll = (i:number) =>  {
        firestore.collection('tasks').doc(i.toString()).update({text: updateData?.text, name: updateData?.name, done: updateData?.done})
    }

    const addTask = (i:number,day:number) =>  {
        firestore.collection('tasks').doc(i.toString()).set({
            id: i,
            done: false,
            day:day,
            text: updateData?.text,
            name: updateData?.name
        })
    }

    React.useEffect(() => {
        if (!user) {
            navigate('login')
        }
    }, [navigate, user]);

    if (user) {
        return (
            <div className="Tassker">
                <Header />
                <DayPicker tasks={tasks} loading={loading} updateName={updateName}  updateCheck={updateCheck}/>
                <TaskList tasks={tasks} loading={loading} updateText={updateText} updateCheck={updateChecks}/>
                <Footer tasks={tasks} update={updateAll} add={addTask}/>
            </div>);
    } else {
        return (
            <Routes>
                <Route path={'/login/*'} element={<Login/>}/>
            </Routes>
        );
    }
}

export default Tassker;