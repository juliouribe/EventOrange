import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Navigation.css';
import * as sessionActions from '../../store/session';
import logo from '../../assets/eventOrange.svg';

export default function Navigation() {
  const currentUser = useSelector(state => state.session.currentUser);
  const dispatch = useDispatch();


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (currentUser) {
    sessionLinks = <button onClick={logout}>Log Out</button>
  } else {
    sessionLinks = <>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </>
  }
  return (
    <ul>
      <li>
        <img src={logo} />
        <NavLink exact to='/'>Home</NavLink>
        {sessionLinks}
      </li>
    </ul>
  )
}
