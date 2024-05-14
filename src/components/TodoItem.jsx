// components/TodoItem.js
import React, { useState } from "react";

function TodoItem({ todo, index, removeTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  return (
    <li style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => toggleComplete(index)}>Complete</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
