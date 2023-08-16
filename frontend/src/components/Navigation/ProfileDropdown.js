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
      className="dropdown nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li>
        <i className="fa-solid fa-user-circle" />
        {email}
      </li>
      {isOpen && (
        <div className="dropdown-content">
          <li>Browse Events</li>
          <li>RSVPs</li>
          <li onClick={logout}>Log Out</li>
        </div>
      )}
    </div>
  )
}
