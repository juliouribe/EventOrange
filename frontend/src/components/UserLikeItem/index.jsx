import React from "react";
import { NavLink } from "react-router-dom";
import "./UserLikeItem.css"
import { getDateLikedEvents } from "../../utils/dateutils";
import { getCity } from "../../utils/addressUtils";
import LikeButton from "../LikeButton";

export default function UserEventItem({ event, likeId }) {

  return (
    <NavLink to={`/events/${event.id}`}>
      <div className="like-event-item">
        <div className="like-event-left">
          <div className="like-event-text">
            <h3 className="like-event-title">{event.title}</h3>
            <h4 className="like-event-date">{getDateLikedEvents(event.startTime)}</h4>
            <h4 className="like-event-location">{event.location}, {getCity(event.address)}</h4>
          </div>
        </div>
        <div className="like-event-right">
          <img className="" src={event?.photoUrl} />
          <div className="share-like">
            <i className="fa-sharp fa-solid fa-arrow-up-from-bracket share-icon"></i>
            <LikeButton eventId={event.id} defaultLike={true} likeId={likeId} />
          </div>
        </div>
      </div>
    </NavLink>
  )
}
