import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  //* add task

  const addTask = () => {
    console.log("addTask from App.js");
  };

  //*delete Task
  const deleteTask = (deletedTaskId) => {
    // console.log("delete", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  return (
    <div className="container">
      <Header title="TASK TRACKER" />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
