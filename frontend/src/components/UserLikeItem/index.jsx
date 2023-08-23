import React from "react";
import { NavLink } from "react-router-dom";
import "./UserLikeItem.css"
import cats from "../../assets/event_images/cat_leash.jpeg"
import disrupt from "../../assets/event_images/disrupt.jpg"
import f1 from "../../assets/event_images/f1_watch_party.jpeg"
import lmp from "../../assets/event_images/lmp_party.jpeg"
import mimosas from "../../assets/event_images/mimosas.jpeg"
import paint from "../../assets/event_images/paint_sip.jpg"
import { getDateAbbreviation, getDateLikedEvents } from "../../utils/dateUtils";
import { getCity } from "../../utils/addressUtils";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../store/events";
import LikeButton from "../LikeButton";

const IMAGES = [cats, mimosas, paint, f1, lmp, disrupt]

export default function UserEventItem({ event, idx }) {
  const dispatch = useDispatch();
  const [month, date] = getDateAbbreviation(event.startTime);

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteEvent(event.id));
  }

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
          <img className="" src={IMAGES[idx % 6]} />
          <div className="share-like">
            <i className="fa-sharp fa-solid fa-arrow-up-from-bracket share-icon"></i>
            <LikeButton eventId={event.id} defaultLike={true} />
          </div>
        </div>
      </div>
    </NavLink>
  )
}
