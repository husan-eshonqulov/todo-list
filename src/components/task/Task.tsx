import "./Task.css";
import { ImCheckmark, ImCross, ImUndo2 } from "react-icons/im";
import { db } from "../../database/firebase-config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

function Task({
  taskId,
  status,
  context,
}: {
  taskId: string;
  status: boolean;
  context: string;
}) {
  const deleteTask = async (id: string) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
  };

  const changeStatus = async (id: string, status: boolean) => {
    const taskDoc = doc(db, "tasks", id);
    await updateDoc(taskDoc, { completed: !status });
  };

  let checkBtn;

  if (status) {
    checkBtn = (
      <button
        className="btn btn-success undo-btn"
        onClick={() => changeStatus(taskId, status)}
      >
        <ImUndo2 className="d-felx" />
      </button>
    );
  } else {
    checkBtn = (
      <button
        className="btn btn-success check-btn"
        onClick={() => changeStatus(taskId, status)}
      >
        <ImCheckmark className="d-flex" />
      </button>
    );
  }

  const isStrike = status ? "line-through" : "";

  return (
    <div className="task px-4 py-3 d-flex justify-content-between align-items-center">
      <div className="task-context" style={{ textDecoration: isStrike }}>
        {context}
      </div>
      <div>
        {checkBtn}
        <button
          className="btn btn-danger cross-btn"
          onClick={() => deleteTask(taskId)}
        >
          <ImCross className="d-flex" />
        </button>
      </div>
    </div>
  );
}

export default Task;
