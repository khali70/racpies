import React from "react";
import "./racipes.css";
const Secs = (props) => {
  return (
    <div className="food-sec" key={props.title}>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <ul>
        ingredients:-
        {props.ingredients.map((ingredient) => (
          <li> {ingredient.text} </li>
        ))}
      </ul>
      <p>Calories:- {props.calories}</p>
    </div>
  );
};
export default Secs;
