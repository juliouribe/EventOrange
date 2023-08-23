import React from "react";
import { NavLink } from "react-router-dom";
import "./EventIndexItem.css"
import cats from "../../assets/event_images/cat_leash.jpeg"
import disrupt from "../../assets/event_images/disrupt.jpg"
import f1 from "../../assets/event_images/f1_watch_party.jpeg"
import lmp from "../../assets/event_images/lmp_party.jpeg"
import mimosas from "../../assets/event_images/mimosas.jpeg"
import paint from "../../assets/event_images/paint_sip.jpg"
import { formatDateTime } from "../../utils/dateUtils";

const IMAGES = [cats, mimosas, paint, f1, lmp, disrupt]

export default function EventIndexItem({ event, idx }) {
  return (
    <NavLink to={`/events/${event.id}`}>
      <div className="index-item">
        <img className="event-banner" src={IMAGES[idx % 6]} />
        <div className="item-text">
          <h3>{event.title}</h3>
          <h4 className="text-start">{formatDateTime(event.startTime)}</h4>
          <h4 className="text-location">{event.location}</h4>
          <h4 className="text-host">Presented By: {event.hostName}</h4>
        </div>
      </div>
    </NavLink>
  )
}
