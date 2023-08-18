import React, { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./EventIndex.css";
import { fetchEvents, getEvents } from "../../store/events";
import EventIndexItem from "../EventIndexItem";

export default function EventIndex() {
  const dispatch = useDispatch();
  const eventsObj = useSelector(getEvents());
  const events = useMemo(() => Object.values(eventsObj));

  useEffect(() => {
    dispatch(fetchEvents());
  }, [])

  return (
    <>
      <div className="event-index-container">
        {events.map((event, idx) => {
          return <EventIndexItem key={event.id} event={event} idx={idx} />
        })}
      </div>
    </>
  )

}
