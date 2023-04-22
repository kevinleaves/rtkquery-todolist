import { useState } from "react";
import { useGetTodosQuery } from "./features/api/apiSlice.js";
import AddTodo from "./features/todos/AddTodo.jsx";
import TodoList from "./features/todos/TodoList.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const { data, error, isLoading, isSuccess, isError } = useGetTodosQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <TodoList todos={data.items} />;
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div>{content}</div>
      <AddTodo />
    </>
  );
}

export default App;
