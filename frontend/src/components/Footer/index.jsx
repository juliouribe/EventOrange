import React from "react";
import "./Footer.css";
import logo from "../../assets/eventOrange.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-one">
          <h3>About Me</h3>
          <p>Julio Uribe</p>
          <p><a href="https://www.linkedin.com/in/julio-uribe-a15736b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/juliouribe" target="_blank" rel="noopener noreferrer">Github</a></p>
        </div>
        <div className="footer-two">
          <h3>Frontend</h3>
          <p>JavaScript</p>
          <p>React</p>
          <p>React-Redux</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        <div className="footer-three">
          <h3>Backend</h3>
          <p>Ruby</p>
          <p>Ruby on Rails</p>
          <p>PostgreSQL</p>
        </div>
        <div className="footer-four">
          <h3>Other Technologies</h3>
          <p>AWS</p>
          <p>Heroku</p>
          <p>Git</p>
          <p>Postman</p>
        </div>
      </div>
      <NavLink exact to="/" onClick={() => window.scrollTo(0, 0)}><img src={logo} /></NavLink>
      <h2>© 2023 EventOrange, Inc. All rights reserved.</h2>
    </div>
  )
}
