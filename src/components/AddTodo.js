import React, { useState } from "react";
import faker from "faker";

export default function AddTodo({ onAddTodo }) {
  const [formClass, setFormClass] = useState("");
  const [todoValue, setTodoValue] = useState("");

  const onAddIconClick = () => {
    formClass === "show-form" ? setFormClass("") : setFormClass("show-form");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (todoValue !== "") {
      onAddTodo({
        id: faker.random.uuid(),
        title: todoValue,
        completed: false,
      });
      setTodoValue("");
      onAddIconClick(); //remove add todo input
    } else {
      onAddIconClick(); //remove add todo input
    }
  };

  return (
    <div className="add-todo">
      <form className={`todo-form ${formClass}`} onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <i className="fas fa-plus add-icon" onClick={onAddIconClick}></i>
    </div>
  );
}
