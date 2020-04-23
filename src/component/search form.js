import React from "react";
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
      <input type="submit" className="s-text" value="search" />
    </form>
  );
};
export default S_bar;
