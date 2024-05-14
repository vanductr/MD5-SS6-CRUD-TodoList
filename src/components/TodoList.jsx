// components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, toggleComplete, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
