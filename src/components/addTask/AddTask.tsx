import "./AddTask.css";
import { useState } from "react";
import { db } from "../../database/firebase-config";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
// import { TaskType } from "../app/App";

function AddTask({ updateTasks }: { updateTasks: Function }) {
  const [input, setInput] = useState("");
  const [taskId, setTaskId] = useState(0);
  const tasksCollRef = collection(db, "tasks");

  const getTaskId = async () => {
    const data = await getDocs(tasksCollRef);
    const tasks = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setTaskId(tasks.length);
  };
  getTaskId();

  const addTask = async () => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollRef);
      const tasks = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log("inner", tasks);
      updateTasks(tasks);
    };
    getTasks();
    const taskDoc = doc(db, "tasks", `${taskId}`);
    await setDoc(taskDoc, { task: input, completed: false });
    // console.log("outer");
  };

  return (
    <div className="add-task m-auto">
      <input
        type="text"
        placeholder="Task"
        className="form-control"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="btn w-100"
        onClick={() => {
          if (input) addTask();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
