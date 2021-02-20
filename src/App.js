import React, { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  //States
  const [todos, setTodos] = useState([]);

  // Add To do
  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Delete To do
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Mark Complete
  const markComplete = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
        />
        <AddTodo onAddTodo={onAddTodo} />
      </main>
    </React.Fragment>
  );
}

export default App;
