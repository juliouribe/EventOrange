import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';

export default function ProfileDropdown({ email }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
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
      </li>
      {isOpen && (
        <div className="dropdown-content">
          <li className="dropdown-underline">Browse Events</li>
          <li>View Profile</li>
          <li>Tickets</li>
          <li>Hosted Events</li>
          <li className="dropdown-underline">Bookmarked</li>
          <li onClick={logout}>Log Out</li>
        </div>
      )}
    </div>
  )
}
