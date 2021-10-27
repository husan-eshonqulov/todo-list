import Task from "../task/Task";

function Tasks({ tasks }: { tasks: any }) {
  return (
    <div>
      {tasks.map((task: { task: string; id: string; completed: boolean }) => {
        return (
          <div key={task.id}>
            <Task taskId={task.id} status={task.completed} />
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
