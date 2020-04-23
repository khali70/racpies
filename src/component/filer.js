import React from "react";
import "./filer.css";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jbg.jpg";
import img13 from "./imgs/13.jpg";
import img11 from "./imgs/11.jpg";
import img5 from "./imgs/5.jpg";
const Filer = () => {
  return (
    <>
      <div className="features">
        <div class="video">
          <iframe
            src="https://www.youtube.com/embed/tDiPr-76MZM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="container">
          <div className="feat">
            <h2>FAST</h2>
            <p>
              are you outing?
              <br />
              are you late? <br />
              Try out the fatest delcious food.
            </p>
          </div>

          <div className="feat">
            <h2>HEALTHY</h2>
            <p>
              back from gym? <br />
              are you busy to prepare your own food?
              <br />
              Try our customized meals for your diet.
            </p>
          </div>
        </div>
      </div>
      <div className="graper" id="menu">
        <div className="about-me">
          <div className="container">
            <div className="img">
              <img src={img1} alt="test" />
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
              <img src={img2} alt="test" />
            </div>

            <div className="information">
              <h2>Chicken chest</h2>
              <h4>Chicken salad. lettuce chicken onions nuts purple cabbage</h4>
              <p>Cal:107 Protein:23.3g Carb:0g Fat:1.8g</p>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="container">
            <div className="img">
              <img src={img3} />
            </div>

            <div className="inf">
              <h2>hotdog</h2>
              <h4>hotdog bun, friez, tomatoes, ketchup</h4>
              <p>Hotdog 1 bun g, Cal:100, Protein:4g, Carb:20g, Fat:1.5g</p>
            </div>
          </div>
        </div>
        <div className="sec color">
          <div className="container con-l">
            <div className="img l ">
              <img src={img5} alt="test" />
            </div>

            <div className="inf">
              <h2>pizza</h2>
              <h4>
                cheese, tomato sauce, mozzarella, tomato slices,
                <br />
                parsley leaves, mushrooms, black olives, red pepper,
              </h4>
              <p>Container (6 slices) Cal:1080 Protein:54g Carb:156g Fat:30g</p>
            </div>
          </div>
        </div>
        <div className="sec ">
          <div className="container">
            <div className="img">
              <img src={img11} alt="test" />
            </div>

            <div className="inf">
              <h2>steak</h2>
              <h4>red meat, green peas</h4>
              <p>For every 100g, Cal:131, Protein:23g, Carb:0g, Fat:4.3g</p>
            </div>
          </div>
        </div>

        <div className="sec color">
          <div className="container con-l">
            <div className="img l">
              <img src={img13} alt="test" />
            </div>

            <div className="inf">
              <h2>Hamburger</h2>
              <h4>melted cheese, meat patty, red onions, pickles, tomatoes,</h4>
              <p>1 bun (45g) , Cal:110, Protein:3g, Carb:21g, Fat:1.5g,</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="container">
          <div className="choose">
            <h2>Now you have your healthest & fastest food</h2>
            <p>
              choose among all of our meals what you most satisfied we have all
              of kinds, from now don't worry again about your diet plan, if you
              are gainer or you want to lose weight, if you are an athlete your
              diet is safe with our compatiable macros even if your cheat meal.
            </p>

            <button
              onClick={() => {
                window.open("./form.html");
              }}
            >
              order your meal now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filer;
