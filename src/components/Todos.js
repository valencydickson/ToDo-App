import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, deleteTodo, markComplete }) {
  //renderedList

  const todosHeader = () => {
    if (todos.length) {
      return "All to-dos";
    } else {
      return "No to-dos";
    }
  };

  const todosList = todos.map((todo) => {
    return (
      <div key={todo.id} className="todo">
        <Todo todo={todo} markComplete={markComplete} />
        <i
          className="fas fa-trash delete-icon"
          onClick={() => deleteTodo(todo.id)}
        ></i>
      </div>
    );
  });
  return (
    <div>
      <p className="todos-heading">{todosHeader()}</p>
      {todosList}
    </div>
  );
}
