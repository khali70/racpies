import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h2>
          Fast<span>Healthy</span>
        </h2>
        <ul>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
