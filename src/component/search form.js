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
      <button onClick={props.search}>
        <Link
          activeClass="active"
          to="racipes"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Search
        </Link>
      </button>
    </form>
  );
};
export default S_bar;
