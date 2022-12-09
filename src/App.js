import React from "react";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 1 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = { id: Date.now(), title: newTask, status: 0 };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  const handleInputChage = (e) => {
    setNewTask(e.target.value);
  };
  const setTaskStatus = (taskID, status) => {
    setTasks(
      tasks.map((task) => {
        ///////
        if (task.id === taskID) return { ...task, status: status ? 1 : 0 };
        return task;
      })
    );
  };
  const removeTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };
  return (
    <div className="container">
      <Header title="Todo list" subTitle="Get one item done at a time" />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />

      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChage={handleInputChage}
      />
    </div>
  );
}

export default App;
