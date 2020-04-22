import React from "react";
import "./filer.css";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/12.jpg";
const Filer = () => {
  return (
    <>
      <div className="about-me">
        <div className="container">
          <div className="img">
            <img src={img1} height="300" width="400" alt="test" />
          </div>

          <div className="info">
            <h2>Chicken chest</h2>
            <h4>Chicken salad. lettuce chicken onions nuts purple cabbage</h4>
            <p>Cal:107 Protein:23.3g Carb:0g Fat:1.8g</p>
          </div>
        </div>
      </div>
      <div className="healthy">
        <div className="container">
          <div className="image">
            <img src={img2} height="300" width="400" alt="test" />
          </div>

          <div className="information">
            <h2>Chicken chest</h2>
            <h4>Chicken salad. lettuce chicken onions nuts purple cabbage</h4>
            <p>Cal:107 Protein:23.3g Carb:0g Fat:1.8g</p>
          </div>
        </div>
      </div>
      <div className="healthy5">
        <div className="container">
          <div className="image5">
            <img src={img3} height="300" width="400" alt="test" />
          </div>

          <div className="information5">
            <h2>Chicken chest</h2>
            <h4>Chicken salad. lettuce chicken onions nuts purple cabbage</h4>
            <p>Cal:107 Protein:23.3g Carb:0g Fat:1.8g</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filer;
