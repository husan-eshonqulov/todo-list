import "./AddTask.css";
import { useState } from "react";
import { db } from "../../database/firebase-config";
import { doc, setDoc } from "firebase/firestore";

function AddTask({ dataLen }: { dataLen: number }) {
  const [task, setTask] = useState("");

  const addTask = async () => {
    const taskDoc = doc(db, "tasks", `${dataLen}`);
    await setDoc(taskDoc, { task: task, completed: false });
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
