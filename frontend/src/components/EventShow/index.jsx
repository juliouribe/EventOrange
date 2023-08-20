import React, { useEffect } from "react";
import "./EventShow.css"
import { formatDateTimeDateOnly, formatDateTimeHoursOnly } from "../../utils/dateutils";
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
    <>
      <div className="event-image">
        <img src={IMAGES[eventId - 1]} className="show-image" />
      </div>
      <div className="event-text-container">
        <div className="event-text">
          <div className="event-left">
            <h3 className="event-date">{formatDateTimeDateOnly(event?.startTime)}</h3>
            <h1>{event?.title}</h1>
            <h2>When and where</h2>
            <div className="event-ws">
              <div className="event-when">
                <h3><strong>Date and time</strong></h3>
                <h4 className="event-start">Starts on {formatDateTimeDateOnly(event?.startTime)} - {formatDateTimeHoursOnly(event?.startTime)}</h4>
              </div>
              <div className="event-where">
                <h3><strong>Location</strong></h3>
                <h4 className="event-location">{event?.location}</h4>
              </div>
            </div>
            <div className="event-info">
              <h2>About this event</h2>
              <p className="event-description">{event?.body}</p>
            </div>
          </div>
          <div className="event-right">
            <div className="right-box">
              <h3 className="details">$0</h3>
              <button className="tickets">Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
