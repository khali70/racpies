import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <span className="contact">Contact us</span>
      <div className="social">
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
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="copy">
        <span>
          All rights reserved © 2020<a href="#">Atom </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
