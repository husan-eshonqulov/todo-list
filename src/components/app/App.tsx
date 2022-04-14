import "./App.css";
import { useEffect, useState } from "react";
import AddTask from "../addTask/AddTask";
import Tasks from "../tasks/Tasks";
import { db } from "../../database/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export type TaskType = any;

function App() {
  // what is the task type?
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const tasksCollRef = collection(db, "tasks");

  console.log("App");

  useEffect(() => {
    const unsub = onSnapshot(tasksCollRef, (data) => {
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTasks = (tasks: TaskType[]) => {
    setTasks(tasks);
  };

  return (
    <div className="container mb-5">
      <h1 className="text-center mt-4" style={{ color: "#777" }}>
        ToDo
      </h1>
      <div className="px-4 py-4 mt-3 input-div">
        <AddTask updateTasks={updateTasks} />
      </div>
      <h2 className="mt-5 mb-3" style={{ color: "#333" }}>
        Tasks
      </h2>
      <hr />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
