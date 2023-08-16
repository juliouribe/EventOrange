import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './Navigation.css';
import * as sessionActions from '../../store/session';
import logo from '../../assets/eventOrange.svg';
import ProfileDropdown from "./ProfileDropdown";

export default function Navigation() {
  const currentUser = useSelector(state => state.session.currentUser);
  const dispatch = useDispatch();


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (currentUser) {
    // sessionLinks = (<ProfileButton user={currentUser} />)
    // sessionLinks = <button onClick={logout}>Log Out</button>
    sessionLinks = (
      <ProfileDropdown email={currentUser.email} />
    )
  } else {
    sessionLinks = <>
      <li><NavLink to='/login'>Log In</NavLink></li>
      <li><NavLink to='/signup'>Sign Up</NavLink></li>
    </>
  }
  return (
    <div className="nav-container">
      <ul className="nav-left">
        <li>
          <NavLink exact to='/'><img src={logo} /></NavLink>
        </li>
      </ul>
      <ul className="nav-right">
        {sessionLinks}
      </ul>
    </div>
  )
}
