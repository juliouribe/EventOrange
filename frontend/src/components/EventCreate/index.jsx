import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EventCreate.css";

export default function EventCreate() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.currentUser)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // TODO: Add datetime pickers.
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  // TODO: Link back to hosted events page
  return (
    <>
      <div className="event-form-container">
        <form className="event-form">
          <div className="form-basic-info">
            <h1>Basic Info</h1>
            <p>Name your event and tell event-goes why they should come. Add details that highlight what makes it unique.</p>
            <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <label hmtlfor="event-image">Event Image</label>
            <input type="file" id="event-image" onChange={(e) => setImage(e.target.files[0])} />
            {image && <img src={URL.createObjectURL(image)} alt="preview" />}

            <label hmtlfor="host-options">Organizer</label>
            <select id="host-options" defaultValue={`${sessionUser.firstName} ${sessionUser.lastName}`}>
              <option value>{`${sessionUser.firstName} ${sessionUser.lastName}`}</option>
            </select>
          </div>
          <div className="form-location">
            <h1>Location</h1>
            <p>Help people in the area discover your event and let attendees know where to show up.</p>
            <input type="text" placeholder="Venue Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <input type="text" placeholder="Street Address" />
          </div>
          <div className="form-date-time">
            <h1>Date and Time</h1>
            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
            <div className="date-time-inputs">
              <div className="event-start">
                <label hmtlfor="start-date">Start Date</label>
                <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                <label hmtlfor="start-time">Start Time</label>
                <input type="time" id="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
              </div>
              <div className="event-end">
                <label hmtlfor="end-date">End Date</label>
                <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <label hmtlfor="end-time">End Time</label>
                <input type="time" id="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="form-submit">
            <button className="reset-button" type="submit">Discard</button>
            <button type="submit">Create Event</button>
          </div>
        </form >
      </div >
    </>
  )
}
