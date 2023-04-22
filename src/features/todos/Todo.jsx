import React from "react";
import { useToggleTodoMutation } from "../api/apiSlice.js";

export default function Todo({ todo }) {
  const [toggleTodo, { isLoading }] = useToggleTodoMutation();
  const { taskname, complete } = todo;

  const handleToggleTodo = () => {
    toggleTodo({ ...todo, complete: !complete });
  };

  return (
    <>
      <div>{taskname}</div>
      <input
        type="checkbox"
        checked={complete}
        onChange={handleToggleTodo}
      ></input>
    </>
  );
}
