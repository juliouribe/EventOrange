import React, { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navigation.css";
import logo from "../../assets/eventOrange.svg";
import Profile from "./Profile";
import { fetchTickets, getTickets } from "../../store/tickets";
import { fetchLikes, getLikes } from "../../store/likes";

export default function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const ticketsObj = useSelector(getTickets());
  const likesObj = useSelector(getLikes());
  const tickets = useMemo(() => Object.values(ticketsObj));
  const likes = useMemo(() => Object.values(likesObj));

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchTickets());
      dispatch(fetchLikes());
    }
  }, [currentUser]);

  let sessionLinks;
  if (currentUser) {
    sessionLinks = (
      <Profile
        email={currentUser.email}
        ticketCount={tickets.length}
        likesCount={likes.length}
      />
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
          <div className="nav-item">
            <i className="fa-solid fa-plus icon"></i>
            <li><NavLink to="/events/create">Create an event</NavLink></li>
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
    </>
  )
}
