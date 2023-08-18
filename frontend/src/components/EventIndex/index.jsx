import React, { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./EventIndex.css";
import { fetchEvents, getEvents } from "../../store/events";

export default function EventIndex() {
  const dispatch = useDispatch();
  const eventsObj = useSelector(getEvents());
  const events = useMemo(() => Object.values(eventsObj));
  console.log(events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [])

  return (
    <>
      <ul>
        {events.map((event) => <li key={event.id}>{event.title}</li>)}
      </ul>
    </>
  )

}
