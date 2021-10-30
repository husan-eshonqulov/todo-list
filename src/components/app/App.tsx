import "./App.css";
import { useEffect, useState } from "react";
import AddTask from "../addTask/AddTask";
import Tasks from "../tasks/Tasks";
import { db } from "../../database/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  // what is the task type?
  const [tasks, setTasks] = useState<any[]>([]);
  const tasksCollRef = collection(db, "tasks");

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollRef);
      const tasks = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTasks(tasks);
    };
    getTasks();
  }, [tasksCollRef]);

  console.log(tasks);

  return (
    <div className="container mb-5">
      <h1 className="text-center mt-4" style={{ color: "#777" }}>
        ToDo
      </h1>
      <div className="px-4 py-4 mt-3 input-div">
        <AddTask />
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
