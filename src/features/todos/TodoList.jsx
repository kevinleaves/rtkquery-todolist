import React from "react";
import Todo from "./Todo.jsx";

export default function TodoList({ todos }) {
  return (
    <ul className="flex flex-col">
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
