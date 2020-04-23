import React from "react";
import "./portofolio.css";
import img19 from "./imgs/19.jpg";
import img20 from "./imgs/20.jpg";
import img24 from "./imgs/24.jpg";
import img18 from "./imgs/18.jpg";
import img10 from "./imgs/10.jpg";
import img27 from "./imgs/27.jpg";
import img11 from "./imgs/11.jpg";
import img22 from "./imgs/22.jpg";
import img9 from "./imgs/9.jpg";
const Portfolio = (props) => {
  return (
    <div>
      <div className="portfolio">
        <div className="container">
          <h2>our work</h2>
          <p>Browse and watch our lastest work , wish you enjoy</p>
          <div className="ourwork">
            <div>
              <img src={img19} />
            </div>
            <div>
              <img src={img20} />
            </div>
            <div>
              <img src={img24} />
            </div>
            <div>
              <img src={img18} />
            </div>
            <div>
              <img src={img10} />
            </div>
            <div>
              <img src={img27} />
            </div>
            <div>
              <img src={img11} />
            </div>
            <div>
              <img src={img22} />
            </div>
            <div className="last">
              <img src={img9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
