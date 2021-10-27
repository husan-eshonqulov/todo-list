import { ImCheckmark, ImCross } from "react-icons/im";
import { db } from "../../database/firebase-config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

function Task({ taskId, status }: { taskId: string; status: boolean }) {
  const deleteTask = async (id: string) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
  };

  const changeStatus = async (id: string, status: boolean) => {
    const taskDoc = doc(db, "tasks", id);
    await updateDoc(taskDoc, { completed: !status });
  };

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => changeStatus(taskId, status)}
      >
        <ImCheckmark />
      </button>
      <button className="btn btn-danger" onClick={() => deleteTask(taskId)}>
        <ImCross />
      </button>
    </div>
  );
}

export default Task;
