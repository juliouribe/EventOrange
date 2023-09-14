import React, { useState } from "react";
import { formatDateTime, getMonthDayYear } from "../../utils/dateutils";
import "./UpdateTicketsForm.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTickets } from "../../store/tickets";
import { useHistory } from "react-router-dom";

export default function UpdateTicketsForm({ event, closeModal, image, tickets }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(tickets.quantity);
  const currentUser = useSelector(state => state.session.currentUser);
  const history = useHistory();
  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    closeModal();
  }

  const incrementQuantity = (e) => {
    e.stopPropagation();
    if (quantity >= 8) return;
    setQuantity(prev => prev + 1);
  }

  const decrementQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(1);
    }
  }

  const submitUpdateTickets = (e) => {
    e.stopPropagation();
    if (!currentUser) {
      history.push("/login");
      return;
    }
    const ticketData = {
      ...tickets,
      quantity: quantity,
    }
    dispatch(updateTickets(ticketData));
    closeModal();
  }

  return (
    <div className="modal">
      <div className="modal-background" onClick={handleBackgroundClick}>

      </div>

      <div className="modal-content">
        <div className="checkout-left">
          <div className="checkout-title">
            <h2>{event?.title}</h2>
            <h3>{formatDateTime(event?.startTime)}</h3>
          </div>
          <div className="checkout-info">
            {/* <label htmlFor="promo-code">Promo Code</label>
            <input type="text" name="promo-code" placeholder="Enter promo code" /> */}
            <h1>Update Tickets</h1>
            <div className="checkout-tickets">
              <div className="checkout-ga">
                <h3>General Admission - FREE!</h3>
                <div className="checkout-quantity">
                  <button type="button" className="minus-button" onClick={decrementQuantity}>-</button>
                  <div className="quantity-count">
                    <p>{quantity}</p>
                  </div>
                  <button type="button" className="plus-button" onClick={incrementQuantity}>+</button>
                </div>
              </div>
              <div className="checkout-ga-details">
                <h3>Free</h3>
                <h4>Sales ends on {getMonthDayYear(event?.startTime)}</h4>
                <p>RSVP to let us know you’re coming and be entered to win prizes at each event! General Admission seating provides you access to public seating all throughout the event. Limit 8 tickets per customer</p>
              </div>
            </div>
          </div>
          <div className="checkout-details-end">
            <p>Powered by <strong>EventOrange</strong></p>
            <p>English (US)</p>
          </div>
          <div className="checkout-footer">
            <h3 id="ticket-ad">🔥 Few tickets left</h3>
            <button onClick={submitUpdateTickets}>Update Tickets</button>
          </div>
        </div>
        <div className="checkout-right">
          <img src={image} className="checkout-event-image" />
        </div>
      </div>
    </div>
  )
}
