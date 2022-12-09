import React from "react";

function AddTaskForm({ handleSubmit, newTask, handleInputChage }) {
  return (
    <div>
      {" "}
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
  );
}

export default AddTaskForm;
