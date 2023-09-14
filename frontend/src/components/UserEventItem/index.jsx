import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./UserEventItem.css"
import { formatDateTime, getDateAbbreviation } from "../../utils/dateutils";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../store/events";
import { deleteTicket } from "../../store/tickets";
import UpdateTicketForm from "../UpdateTicketsForm";

export default function UserEventItem({ event, owner, ticket = {} }) {
  const dispatch = useDispatch();
  const [month, date] = getDateAbbreviation(event.startTime);
  const [showUpdateTicket, setUpdateTicket] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteEvent(event.id));
  }

  const removeTickets = async (e) => {
    e.preventDefault();
    dispatch(deleteTicket(ticket.id));
  }

  return (
    <div className="profile-event-item">
      <div className="event-date">
        <h4>{month}</h4>
        <h3>{date}</h3>
      </div>
      <NavLink to={`/events/${event.id}`}>
        <img className="" src={event?.photoUrl} />
      </NavLink >
      <div className="profile-event-right">
        <div className="profile-event-text">
          <h3 className="profile-event-title">{event.title}</h3>
          <h4 className="profile-event-date">{formatDateTime(event.startTime)}</h4>
          <h4 className="profile-event-date">
            {owner ? 'Event created on' : 'Order placed on'} {formatDateTime(event.createdAt)}
          </h4>
        </div>
        {owner ?
          <div className="edit-delete">
            <NavLink to={`/events/edit/${event.id}`}><button >Edit</button></NavLink>
            <button id="delete" onClick={handleDelete}>Delete</button>
          </div>
          :
          <div className="edit-delete">
            <button onClick={() => setUpdateTicket(true)}>{ticket?.quantity} Ticket(s)</button>
            {showUpdateTicket && (
              <UpdateTicketForm event={event} closeModal={() => setUpdateTicket(false)} image={event?.photoUrl} tickets={ticket?.quantity} />
            )}
            <button id="delete" onClick={removeTickets}>Remove</button>
          </div>
        }
      </div>
    </div>
  )
}
