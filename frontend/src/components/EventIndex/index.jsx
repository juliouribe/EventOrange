import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./EventIndex.css";
import { fetchEvents, getEvents } from "../../store/events";
import EventIndexItem from "../EventIndexItem";
import { getLikes, fetchLikes } from "../../store/likes";


export default function EventIndex() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser);
  const eventsObj = useSelector(getEvents());
  const likes = Object.values(useSelector(getLikes()));
  const events = Object.values(eventsObj);
  events.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });

  useEffect(() => {
    dispatch(fetchEvents());
    if (currentUser) {
      dispatch(fetchLikes());
    };
  }, [dispatch]);

  return (
    <>
      <div className="event-index-title">
        <h1>Events in San Francisco</h1>
      </div>
      <div className="event-index-container">
        {events.map((event) => {
          const like = likes.find(like => like.eventId === event.id)
          const eventLiked = (like === undefined ? false : true);
          return <EventIndexItem
            key={event.id} event={event}
            eventLiked={eventLiked}
            likeId={eventLiked ? like.id : null} />
        })}
      </div>
    </>
  )

}
