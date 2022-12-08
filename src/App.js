import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 1 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("asd");
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
    <div>
      <div className="container">
        <h1 className="title">
          Todo list
          <span>Get one item done at a time</span>
        </h1>

        <ul className="task-list">
          {tasks
            .filter(
              (task) => (showIncomplete ? task.status !== 1 : true) ///////
            ) //////
            .map((task) => (
              <li key={task.id} className={task.status ? "done" : ""}>
                <span className="label">{task.title} </span>
                <div className="actions">
                  <input
                    type="checkbox"
                    className="btn-action btn-action-done"
                    checked={Boolean(task.status)}
                    onChange={(e) => setTaskStatus(task.id, e.target.checked)} /////
                  />
                  <button
                    className="btn-action btn-action-delete"
                    onClick={() => removeTask(task.id)}
                  >
                    ⨯
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <div className="filter-wrapper">
          <label htmlFor="filter" className="filter-label">
            Show imcompleted tasks only
          </label>
          <input
            type="checkbox"
            id="filter"
            checked={showIncomplete}
            onChange={(e) => setShowIncomplete(Boolean(e.target.checked))}
          />
        </div>
        <form action="#" className="form" onSubmit={handleSubmit}>
          <label htmlFor="newitem">Add to the todo list</label>
          <input
            type="text"
            id="newitem"
            value={newTask}
            onChange={handleInputChage}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default App;
