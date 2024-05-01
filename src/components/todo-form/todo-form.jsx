import React from "react";
import "./todo-form.scss";

export const TodoForm = ({ todos, setTodos }) => {
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(), // Generate a unique id
        label: task.trim(), // Use the trimmed task as label
        checked: false, // Initialize as unchecked
      };
      setTodos([...todos, newTodo]); // Add the new todo to the todos array
      setTask(""); // Clear the task input field
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo(); // Trigger handleAddTodo on Enter key press
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
