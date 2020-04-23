import React, { Component } from "react";
import "./Nav.css";
import S_bar from "./search form";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <h2>
            Fast<span>Healthy</span>
          </h2>
          <S_bar
            search={this.props.search}
            key_search={this.props.key_search}
            keychange={this.props.keychange}
          />
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
  }
}
export default Nav;
