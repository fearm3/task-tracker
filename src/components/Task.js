// import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, colorDelete, deleteTask }) => {
  return (
    <div className="task">
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
