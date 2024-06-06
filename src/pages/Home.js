import React, { Component, useState } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";

function Home() {
  // A default state of this component with an empty list of todos.
  const [todos, setTodos] = useState([]);
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  const addTodo = (todo) => {
    todo.id = Math.random();
    setTodos([...todos, todo]);
  };

  return (
    <div className="Home">
      <h1>Todo's </h1>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default Home;
