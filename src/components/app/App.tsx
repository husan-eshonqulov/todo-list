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
    <div>
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
