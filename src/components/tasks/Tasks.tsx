import "./Tasks.css";
import Task from "../task/Task";

function Tasks({ tasks }: { tasks: any }) {
  const numOfTasks = tasks.length;
  return (
    <div className="tasks-div">
      {tasks.map(
        (
          task: { task: string; id: string; completed: boolean },
          index: number
        ) => {
          const taskStyle: {
            border: string;
            borderBottom: string;
            borderTopLeftRadius: string;
            borderTopRightRadius: string;
            borderBottomLeftRadius: string;
            borderBottomRightRadius: string;
            backgroundColor: string;
            color: string;
          } = {
            border: "2px solid #ddd",
            borderBottom: "0px solid #ddd",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            backgroundColor: "#dff0d7",
            color: "#3a773a",
          };

          if (index === 0) {
            taskStyle.borderTopLeftRadius = "10px";
            taskStyle.borderTopRightRadius = "10px";
          }

          if (index === numOfTasks - 1) {
            taskStyle.borderBottomLeftRadius = "10px";
            taskStyle.borderBottomRightRadius = "10px";
            taskStyle.borderBottom = "2px solid #ddd";
          }

          if (task.completed) {
            taskStyle.color = "#337493";
            taskStyle.backgroundColor = "#d8edf8";
          }

          return (
            <div key={task.id} style={{ ...taskStyle }}>
              <Task
                taskId={task.id}
                status={task.completed}
                context={task.task}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

export default Tasks;
