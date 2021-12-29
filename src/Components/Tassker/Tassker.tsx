import React, { useContext, useState } from 'react';
import './Tassker.css';
import Footer from '../Footer/Footer';
import DayPicker from '../DayPicker/DayPicker';
import TaskList from '../TaskList/TaskList';
import Header from '../Header/Header';
import { Context } from '../../index';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Tassker = () => {
  const { firestore } = useContext<any>(Context);
  const [tasks, setTasks] = useCollectionData(firestore.collection('tasks'));
  const [updatedTask, setUpdatedTask] = useState({ name: '', text: '', done: false, day: '1' });

  const updateText = (text: string) => {
    setUpdatedTask((prev) => ({ ...prev, text: text }));
  };
  const updateDay = (day: string) => {
    setUpdatedTask((prev) => ({ ...prev, day: day }));
  };

  const updateName = (name: string) => {
    setUpdatedTask((prev) => ({ ...prev, name: name }));
  };

  const updateCheck = (done: boolean) => {
    setUpdatedTask((prev) => ({ ...prev, done: done }));
  };

  const updateChecks = (done: [], day: string) => {
    if (done.length) {
      return firestore
        .collection('tasks')
        .get()
        .then((snapshot: any) => {
          return Promise.all(
            snapshot.docs?.map((doc: any, i: number) => {
              if (tasks && tasks[i].day === day) {
                return doc.ref.update({ done: done[i] });
              }
              return 0;
            })
          );
        });
    }
  };
  const updateAll = (i: number) => {
    firestore.collection('tasks').doc(i.toString()).update({
      text: updatedTask?.text,
      name: updatedTask?.name,
      done: updatedTask?.done,
      day: updatedTask?.day,
    });
  };

  const addTask = (i: number) => {
    firestore.collection('tasks').doc(i.toString()).set({
      id: i,
      done: false,
      day: updatedTask?.day,
      text: updatedTask?.text,
      name: updatedTask?.name,
    });
  };

  return (
    <div className="Tassker">
      <Header />
      <DayPicker
        tasks={tasks}
        loading={setTasks}
        updateName={updateName}
        updateCheck={updateCheck}
        updateDay={updateDay}
      />
      <TaskList
        tasks={tasks}
        loading={setTasks}
        updateText={updateText}
        updateCheck={updateChecks}
      />
      <Footer tasks={tasks} update={updateAll} addTask={addTask} updatedTask={updatedTask} />
    </div>
  );
};

export default Tassker;
