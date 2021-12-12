// import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, colorDelete, deleteTask, toggleDone }) => {
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}
        <FaTrashAlt
          onClick={() => deleteTask(task.id)}
          style={{ color: colorDelete }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
