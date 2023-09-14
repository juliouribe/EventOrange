import React, { useEffect, useMemo, useState } from "react";
import "./EventShow.css"
import { formatDateTimeDateOnly, formatDateTimeHoursOnly } from "../../utils/dateutils";
import { useDispatch, useSelector } from "react-redux";
import { getEvent, fetchEvent } from "../../store/events";
import { useParams, NavLink } from "react-router-dom";
import CheckoutForm from "../CheckoutForm";
import LikeButton from "../LikeButton";
import { getLikes } from "../../store/likes";

export default function EventShow() {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector(getEvent(eventId));
  const [showCheckout, setShowCheckout] = useState(false);
  const ticketsObj = useSelector(state => state.entities.tickets);
  const tickets = Object.values(ticketsObj);
  const likes = Object.values(useSelector(getLikes()));

  // If a ticket populates with this eventId, then the user has already
  // purchased a ticket for this event. We won't render the checkout option but
  // instead the manage tickets button.
  const ticket = useMemo(() => {
    return tickets.find(ticket => ticket.eventId === event?.id)
  }, [tickets, event?.id])
  const like = useMemo(() => {
    return likes.find(like => like.eventId === event?.id)
  }, [likes, event?.id])

  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, [dispatch, eventId])

  return (
    <>
      <div className="event-image">
        <img src={event?.photoUrl} className="show-image" />
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
            <div className="heart-box">
              <LikeButton eventId={eventId} defaultLike={!!like?.id} />
            </div>
            <div className="right-box">
              {ticket?.eventId ?
                <>
                  <h4>Tickets Owned</h4>
                  <NavLink to="/user/purchased-events" onClick={() => window.scrollTo(0, 0)}><button>Manage Tickets</button></NavLink>
                </>
                :
                <>
                  <h3 className="details">$0</h3>
                  <button className="tickets" onClick={() => setShowCheckout(true)}>Tickets</button>
                  {showCheckout && (
                    <CheckoutForm event={event} closeModal={() => setShowCheckout(false)} image={event?.photoUrl} />
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
