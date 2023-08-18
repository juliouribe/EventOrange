import React from "react";
import { NavLink } from "react-router-dom";
import "./EventIndexItem.css"
import cats from "../../assets/event_images/cat_leash.jpeg"
import disrupt from "../../assets/event_images/disrupt.jpg"
import f1 from "../../assets/event_images/f1_watch_party.jpeg"
import lmp from "../../assets/event_images/lmp_party.jpeg"
import mimosas from "../../assets/event_images/mimosas.jpeg"
import paint from "../../assets/event_images/paint_sip.jpg"


const IMAGES = [cats, disrupt, f1, lmp, mimosas, paint]

export default function EventIndexItem({ event, idx }) {
  // TODO: Consider adding hosts into slice of state and then use that when
  // displaying the host.id.
  return (
    <div className="index-item">
      <img className="event-banner" src={IMAGES[idx]} />
      <p>{event.title}</p>
      {/* TODO: Replace this with a datetime util function */}
      <p>{event.startTime}</p>
      <p>{event.location}</p>
      <p>{event.hostId}</p>
    </div>
  )
}
