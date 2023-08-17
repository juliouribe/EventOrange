import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './Navigation.css';
import * as sessionActions from '../../store/session';
import logo from '../../assets/eventOrange.svg';
import ProfileDropdown from "./ProfileDropdown";
import juice from '../../assets/juiceItUpTonight.svg';

export default function Navigation() {
  const currentUser = useSelector(state => state.session.currentUser);
  const dispatch = useDispatch();


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (currentUser) {
    sessionLinks = (
      <ProfileDropdown email={currentUser.email} />
    )
  } else {
    sessionLinks = <>
      <div className="nav-item">
        <li><NavLink to='/login'>Log In</NavLink></li>
      </div>
      <div className="nav-item">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
      </div>
    </>
  }
  return (
    <>
      <div className="nav-container">
        <ul className="nav-left">
          <li>
            <NavLink exact to='/'><img src={logo} /></NavLink>
          </li>
        </ul>
        <ul className="nav-right">
          <div className="nav-item">
            <i className="fa-solid fa-plus icon"></i>
            <li>Create an event</li>
          </div>
          <div className="nav-item">
            <i className="fa-regular fa-heart icon"></i>
            <li>Likes</li>
          </div>
          <div className="nav-item">
            <i className="fa-solid fa-ticket icon"></i>
            <li>Tickets</li>
          </div>
          {sessionLinks}
        </ul>
      </div>

      <div className="splash">
        <img src={juice} />
      </div>
    </>
  )
}
