import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function ProfileDropdown({ email, ticketCount, likesCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    <Redirect to="/" />
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li className="avatar-container">
        <i className="fa-solid fa-user-circle avatar" />
        {email}
        <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
      </li>
      {isOpen && (
        <div className="dropdown-content">
          <li className="dropdown-underline">Browse Events</li>
          <li>View Profile</li>
          <li><NavLink to="/user/hosted-events">Hosted Events</NavLink></li>
          <li><NavLink to="/user/purchased-events">Tickets ({ticketCount})</NavLink></li>
          <li className="dropdown-underline"><NavLink to="/user/liked-events">Likes ({likesCount})</NavLink></li>
          <li onClick={logout}>Log Out</li>
        </div>
      )}
    </div>
  )
}
