import React, { useState } from "react";
import Logo from "../images/todo.svg";

export default function Header() {
  const [sidebarClass, setSidebarClass] = useState("");

  // Toggle sidebar
  const togglerClick = () => {
    sidebarClass === "show-sidebar"
      ? setSidebarClass("")
      : setSidebarClass("show-sidebar");
  };

  return (
    <header>
      <h1>
        <a href="./">
          <img src={Logo} alt="logo" className="logo" />
          To-Do
        </a>
      </h1>

      <i className="fas fa-ellipsis-v toggler" onClick={togglerClick}></i>

      <div className={`sidebar ${sidebarClass}`}>
        <div className="about-heading">
          <h2>About</h2>
          <i className="fas fa-times close-icon" onClick={togglerClick}></i>
        </div>

        <p>To-Do App version 1.0.0 created by Valency Dickson ©2020</p>
        <ul className="social-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/valency-dickson-0a7754125/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/valencydickson"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:dickson.valency@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
