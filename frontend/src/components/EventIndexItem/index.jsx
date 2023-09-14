import React from "react";
import { NavLink } from "react-router-dom";
import "./EventIndexItem.css"
import { formatDateTime } from "../../utils/dateutils";
import LikeButton from "../LikeButton";


export default function EventIndexItem({ event, eventLiked = false, likeId = null }) {

  return (
    <div className="index-item">
      <NavLink to={`/events/${event.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img className="event-banner" src={event?.photoUrl} />
      </NavLink>
      <div className="item-like-button">
        <LikeButton eventId={event.id} defaultLike={eventLiked} likeId={likeId} />
      </div>
      <div className="item-text">
        <h3>{event.title}</h3>
        <h4 className="text-start">{formatDateTime(event.startTime)}</h4>
        <h4 className="text-location">{event.location}</h4>
        <h4 className="text-host">Presented By: {event.hostName}</h4>
      </div>
    </div>
  )
}
