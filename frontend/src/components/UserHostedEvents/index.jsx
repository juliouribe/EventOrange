import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostedEvents, getEvents } from "../../store/events";
import UserEventItem from "../UserEventItem";
import { Redirect } from "react-router-dom";

import "./UserHostedEvents.css";

export default function UserHostedEvents() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const eventsObj = useSelector(getEvents());
  const events = useMemo(() => Object.values(eventsObj));
  events.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });


  useEffect(() => {
    dispatch(fetchHostedEvents());
  }, []);

  // Redirect user to home page if they are not logged in.
  if (!currentUser) return <Redirect to='/' />;

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
            return <UserEventItem key={event.id} event={event} idx={idx} owner={true} />
          })}
        </div>
      </div>
    </>
  )
}
