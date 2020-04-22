import React from "react";
import "./racipes.css";
const Secs = (props) => {
  return (
    <div className="food-sec" key={props.title}>
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
      <div>
        <ul>
          ingredients:-
          {props.ingredients.map((ingredient) => (
            <li> {ingredient.text} </li>
          ))}
        </ul>
        <p>Calories:- {props.calories}</p>
      </div>
    </div>
  );
};
export default Secs;
