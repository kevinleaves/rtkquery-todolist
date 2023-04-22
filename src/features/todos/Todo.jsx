import React from "react";
import {
  useToggleTodoMutation,
  useDeleteTodoMutation,
} from "../api/apiSlice.js";
import { TbTrash } from "react-icons/tb";

export default function Todo({ todo }) {
  const [toggleTodo] = useToggleTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { taskname, complete } = todo;

  const handleToggleTodo = () => {
    toggleTodo({ ...todo, complete: !complete });
  };

  // given a todo id, delete the todo with that ID
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="flex gap-5">
      <div className="text-2xl">{taskname}</div>
      <input
        type="checkbox"
        checked={complete}
        onChange={handleToggleTodo}
      ></input>
      <TbTrash
        className="self-center"
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      ></TbTrash>
    </div>
  );
}
