import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EventIndex.css";
import { fetchEvents, getEvents } from "../../store/events";
import EventIndexItem from "../EventIndexItem";
import { getLikes } from "../../store/likes";
import { getTickets } from "../../store/tickets";


export default function EventIndex() {
  const dispatch = useDispatch();
  const eventsObj = useSelector(getEvents());
  const likes = Object.values(useSelector(getLikes()));
  const events = Object.values(eventsObj);
  events.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
      <div className="event-index-container">
        {events.map((event, idx) => {
          const like = likes.find(like => like.eventId === event.id)
          const eventLiked = (like === undefined ? false : true);
          return <EventIndexItem
            key={event.id} event={event} idx={idx}
            eventLiked={eventLiked}
            likeId={eventLiked ? like.id : null} />
        })}
      </div>
    </>
  )

}
