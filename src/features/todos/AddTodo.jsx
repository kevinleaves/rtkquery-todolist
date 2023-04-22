import React, { useState } from "react";
import { useAddTodoMutation } from "../api/apiSlice";

export default function AddTodo() {
  const [todoInput, setTodoInput] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // send a request using RTK
    addTodo({ taskname: todoInput, complete: false });
    setTodoInput("");
  };

  return (
    <form type="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      ></input>
      <button>add a todo</button>
    </form>
  );
}
