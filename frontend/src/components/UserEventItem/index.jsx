import React from "react";
import { NavLink } from "react-router-dom";
import "./UserEventItem.css"
import cats from "../../assets/event_images/cat_leash.jpeg"
import disrupt from "../../assets/event_images/disrupt.jpg"
import f1 from "../../assets/event_images/f1_watch_party.jpeg"
import lmp from "../../assets/event_images/lmp_party.jpeg"
import mimosas from "../../assets/event_images/mimosas.jpeg"
import paint from "../../assets/event_images/paint_sip.jpg"
import { formatDateTime, getDateAbbreviation } from "../../utils/dateutils";

const IMAGES = [cats, mimosas, paint, f1, lmp, disrupt]

export default function UserEventItem({ event, idx }) {
  const [month, date] = getDateAbbreviation(event.startTime);

  return (
    <NavLink to={`/events/${event.id}`}>
      <div className="profile-event-item">
        <div className="event-date">
          <h4>{month}</h4>
          <h3>{date}</h3>
        </div>
        <img className="" src={IMAGES[idx % 6]} />
        <div className="profile-event-text">
          <h3 className="profile-event-title">{event.title}</h3>
          <h4 className="profile-event-date">{formatDateTime(event.startTime)}</h4>
          <h4 className="profile-event-date">Order placed on {formatDateTime(event.createdAt)}</h4>
        </div>
      </div>
    </NavLink>
  )
}