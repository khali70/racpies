import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./search form.css";

const S_bar = (props) => {
  return (
    <form className="s-form" onSubmit={props.search}>
      <input
        type="text"
        name="key_search"
        className="s-text"
        placeholder="enter your order"
        value={props.key_search}
        onChange={props.keychange}
      />
      <Link
        activeClass="active"
        to="racipes"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <input type="submit" value="Search" onClick={props.search} />
      </Link>
    </form>
  );
};
// onSubmit={props.search}
export default S_bar;
