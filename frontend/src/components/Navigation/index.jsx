import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import logo from "../../assets/eventOrange.svg";
import Profile from "./Profile";

export default function Navigation() {
  const currentUser = useSelector(state => state.session.currentUser);

  let sessionLinks;
  if (currentUser) {
    sessionLinks = (
      <Profile email={currentUser.email} />
    )
  } else {
    sessionLinks = <>
      <div className="nav-item">
        <li><NavLink to="/login">Log In</NavLink></li>
      </div>
      <div className="nav-item">
        <li><NavLink to="/signup">Sign Up</NavLink></li>
      </div>
    </>
  }
  return (
    <>
      <div className="nav-container">
        <ul className="nav-left">
          <li>
            <NavLink exact to="/"><img src={logo} /></NavLink>
          </li>
        </ul>
        <ul className="nav-right">
          <NavLink to="/events/create">
            <div className="nav-item">
              <i className="fa-solid fa-plus icon"></i>
              <li>Create an event</li>
            </div>
          </NavLink>
          <NavLink to="/user/liked-events">
            <div className="nav-item">
              <i className="fa-regular fa-heart icon"></i>
              <li>Likes</li>
            </div>
          </NavLink>
          <NavLink to="/user/purchased-events">
            <div className="nav-item">
              <i className="fa-solid fa-ticket icon"></i>
              <li>Tickets</li>
            </div>
          </NavLink>
          {sessionLinks}
        </ul>
      </div >
    </>
  )
}
