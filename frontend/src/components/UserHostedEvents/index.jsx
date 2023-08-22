import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { fetchEvents, getEvents } from "../../store/events";
import UserEventItem from "../UserEventItem";

import "./UserHostedEvents.css";

export default function UserHostedEvents() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const eventsObj = useSelector(getEvents());
  const events = useMemo(() => (
    Object.values(eventsObj).filter(event => event.hostId === currentUser.id)
  ));

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <>
      <div className="host-container">
        <div className="host-info">
          <div className="host-avatar-container">
            <i className="fa-regular fa-user profile-avatar" />
          </div>
          <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
        </div>
        <div className="host-header">
          <h2>Hosted Events</h2>
        </div>
        <div className="hosted-events">
          {events.map((event, idx) => {
            return <UserEventItem key={event.id} event={event} idx={idx} />
          })}
        </div>
      </div>
    </>
  )
}
