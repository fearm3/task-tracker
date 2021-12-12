import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 5,
      text: "Ready React",
      day: "All time i need.",
      isDone: true,
    },
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 4:00pm",
      isDone: true,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 23th at 6:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 12th at 5:00pm",
      isDone: false,
    },
    {
      id: 4,
      text: "Too many time practice!",
      day: "Dec 12th at 5:00pm +",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  //* add task

  const addTask = (newTask) => {
    // console.log("addTask from App.js");
    const id = Math.floor(Math.random() * 100 + 1);
    console.log(id);
    console.log(newTask);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  //*delete Task
  const deleteTask = (deletedTaskId) => {
    // console.log("delete", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  //* Toogle Done
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  //*Show add task
  const toggleShow = () => setShowAddTask(!showAddTask);

  //delete all tasks
  const deleteAllTask = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        toggleShow={toggleShow}
        showAddTask={showAddTask}
        deleteAllTask={deleteAllTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
    </div>
  );
}

export default App;
