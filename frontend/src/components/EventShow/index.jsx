import React, { useEffect, useMemo, useState } from "react";
import "./EventShow.css"
import { formatDateTimeDateOnly, formatDateTimeHoursOnly } from "../../utils/dateUtils";
import { useDispatch, useSelector } from "react-redux";
import { getEvent, fetchEvent } from "../../store/events";
import { useParams, NavLink } from "react-router-dom";
import CheckoutForm from "../CheckoutForm";
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
  const [showCheckout, setShowCheckout] = useState(false);
  const ticketsObj = useSelector(state => state.entities.tickets);
  const tickets = Object.values(ticketsObj);
  
  // If a ticket populates with this eventId, then the user has already
  // purchased a ticket for this event. We won't render the checkout option but
  // instead the manage tickets button.
  const ticket = useMemo(() => {
    return tickets.find(ticket => ticket.eventId === event?.id)
  }, [tickets, event?.id])

  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, [dispatch, eventId])

  return (
    <>
      <div className="event-image">
        <img src={IMAGES[eventId - 1 % 6]} className="show-image" />
      </div>
      <div className="event-text-container">
        <div className="event-text">
          <div className="event-left">
            <h3>{formatDateTimeDateOnly(event?.startTime)}</h3>
            <h1>{event?.title}</h1>
            <h2>When and where</h2>
            <div className="event-ws">
              <div className="event-when">
                <h3><strong>Date and time</strong></h3>
                <h4 className="event-start">Starts on {formatDateTimeDateOnly(event?.startTime)} - {formatDateTimeHoursOnly(event?.startTime)}</h4>
              </div>
              <div className="event-where">
                <h3><strong>Location</strong></h3>
                <h4 className="event-location"><strong>{event?.location}</strong> | {event?.address}</h4>
              </div>
            </div>
            <div className="event-info">
              <h2>About this event</h2>
              <p className="event-description">{event?.body}</p>
            </div>
          </div>
          <div className="event-right">
            <div className="right-box">
              {ticket?.eventId ?
                <>
                  <h4>Tickets Owned</h4>
                  <NavLink to="/user/purchased-events"><button>Manage Tickets</button></NavLink>
                </>
                :
                <>
                  <h3 className="details">$0</h3>
                  <button className="tickets" onClick={() => setShowCheckout(true)}>Tickets</button>
                  {showCheckout && (
                    <CheckoutForm event={event} closeModal={() => setShowCheckout(false)} image={IMAGES[eventId - 1 % 6]} />
                  )}
                </>
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
