import React, { useEffect } from "react";
import "./EventShow.css"
import { formatDateTime } from "../../utils/dateutils";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent, getEvent } from "../../store/events";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import cats from "../../assets/event_images/cat_leash.jpeg"
import disrupt from "../../assets/event_images/disrupt.jpg"
import f1 from "../../assets/event_images/f1_watch_party.jpeg"
import lmp from "../../assets/event_images/lmp_party.jpeg"
import mimosas from "../../assets/event_images/mimosas.jpeg"
import paint from "../../assets/event_images/paint_sip.jpg"

const IMAGES = [cats, mimosas, paint, f1, lmp, disrupt]


export default function EventShow() {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector(getEvent(eventId));
  console.log(eventId)
  useEffect(() => {
    dispatch(fetchEvent(eventId))
  }, [eventId])

  return (
    <div className="event-show">
      <img src={IMAGES[eventId - 1]} className="show-image" />
      <h1>{event?.title}</h1>
      <h2>heloo this is something </h2>
    </div>
  )
}
