import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <span className="contact">Contact us</span>
      <div className="social">
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Github</a>
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
