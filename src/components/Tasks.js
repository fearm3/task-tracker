import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask }) => {
  // console.log("tasks", tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          colorDelete="red"
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
