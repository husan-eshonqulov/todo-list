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

  const checkBtn = status ? (
    <ImUndo2 className="d-flex" />
  ) : (
    <ImCheckmark className="d-flex" />
  );

  const checkBtnBg = status ? "#56c0e0" : "#5fb957";
  const isStrike = status ? "line-through" : "";

  return (
    <div className="task px-4 py-3 d-flex justify-content-between align-items-center">
      <div className="task-context" style={{ textDecoration: isStrike }}>
        {context}
      </div>
      <div>
        <button
          className="btn btn-success check-btn"
          onClick={() => changeStatus(taskId, status)}
          style={{ backgroundColor: checkBtnBg }}
        >
          {checkBtn}
        </button>
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
