import React, { Component } from "react";
import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import S_bar from "./search form";

class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
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
              <a href="./Contact.html" target="_blank">
                contact
              </a>
            </li>
            <li>
              <Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                menu
              </Link>
            </li>
            <li>
              <a onClick={this.scrollToTop}>home</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Nav;
