import React from "react";
import "./search form.css";

const S_bar = (props) => {
  return (
    <form className="s-form" onSubmit={props.search}>
      <input
        type="text"
        name="key_search"
        className="s-text"
        value={props.key_search}
        onChange={props.keychange}
      />
      <label>Enter The Racipe You Search For</label>
      <input type="submit" className="s-text" value="search" />
    </form>
  );
};
// key_search = e.target.elements.key_search.value;
export default S_bar;
