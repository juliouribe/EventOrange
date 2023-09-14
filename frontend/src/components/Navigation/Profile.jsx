import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom";
import { getTickets, fetchTickets } from "../../store/tickets";
import { getLikes, fetchLikes } from "../../store/likes";

export default function ProfileDropdown({ email }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const tickets = useSelector(getTickets());
  const likes = useSelector(getLikes());

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchTickets());
      dispatch(fetchLikes());
    }
  }, [dispatch]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
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
          <li className="dropdown-underline"><NavLink exact to="/" onClick={() => window.scrollTo(0, 0)}>Browse Events</NavLink></li>
          <li><NavLink to="/user/hosted-events" onClick={() => window.scrollTo(0, 0)}>Hosted Events</NavLink></li>
          <li><NavLink to="/user/purchased-events" onClick={() => window.scrollTo(0, 0)}>Tickets ({Object.values(tickets).length})</NavLink></li>
          <li className="dropdown-underline" onClick={() => window.scrollTo(0, 0)}><NavLink to="/user/liked-events">Likes ({Object.values(likes).length})</NavLink></li>
          <li onClick={logout}>Log Out</li>
        </div>
      )}
    </div>
  )
}
