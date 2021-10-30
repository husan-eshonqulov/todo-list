import "./AddTask.css";
import { useState } from "react";
import { db } from "../../database/firebase-config";
import { collection, addDoc } from "firebase/firestore";

function AddTask() {
  const [task, setTask] = useState("");
  const tasksCollectionRef = collection(db, "tasks");

  const addTask = async () => {
    await addDoc(tasksCollectionRef, { task: task, completed: false });
  };

  return (
    <div className="add-task m-auto">
      <input
        type="text"
        placeholder="Task"
        className="form-control"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn w-100" onClick={() => addTask()}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
