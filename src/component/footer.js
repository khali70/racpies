import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="contact" id="contact">
        <div className="container">
          <div className="info">
            <h2>Contact us</h2>
            <p>here's our contact info available reservations</p>
            <p>
              15 A Street
              <br />
              Ain Helwan <br />
              Cairo,Egypt
            </p>
            <p>
              <strong>E-mail:</strong> fasthealthy20@gmail.com <br />
              <strong>Phone:</strong> +20 0123456789
            </p>
          </div>

          <div className="form">
            <label>Name*</label>
            <input type="text" placeholder="your name here" />

            <label>E-mail*</label>
            <input type="text" placeholder="your E-mail here" />

            <label>Phone*</label>
            <input type="text" placeholder="your Phone here" />

            <label>message*</label>
            <textarea></textarea>

            <input type="submit" value="contact us" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <span> copyright &copy;2020 FastHealthy Inc.</span>
          <ul>
            <li>
              <a href="#">
                {" "}
                <i className="fa fa-facebook"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
