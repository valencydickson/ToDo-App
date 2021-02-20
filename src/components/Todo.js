import React from "react";

export default function Todo({ todo, markComplete }) {
  const setStyle = () => {
    if (todo.completed) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div className="todo-content" style={setStyle()}>
      <p>
        <input
          type="checkbox"
          className="checkbox"
          onClick={() => markComplete(todo.id)}
        />
        {todo.title}
      </p>
    </div>
  );
}
