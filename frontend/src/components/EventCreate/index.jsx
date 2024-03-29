import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EventCreate.css";
import { createEvent } from "../../store/events";
import { Redirect, useHistory } from "react-router-dom";

export default function EventCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.session.currentUser)
  const imageInputRef = useRef();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    setStartDateTime(`${startDate}T${startTime}`);
  }, [startDate, startTime])

  useEffect(() => {
    if (endDate && endTime) {
      setEndDateTime(`${endDate}T${endTime}`);
    } else {
      setEndDateTime("");
    }
  }, [endDate, endTime])

  // Redirect user to home page if they are not logged in.
  if (!currentUser) return <Redirect to='/login' />;

  const handleImage = (e) => {
    setImage(e.currentTarget.files[0]);
  };

  const handleClearAttachment = () => {
    imageInputRef.current.value = null;
    setImage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formErrors.length) return;
    const eventData = new FormData();
    eventData.append("event[title]", title);
    eventData.append("event[body]", body);
    eventData.append("event[startTime]", startDateTime);
    eventData.append("event[endTime]", endDateTime);
    eventData.append("event[location]", location);
    eventData.append("event[address]", address);
    eventData.append("event[capacity]", capacity);
    if (image) {
      eventData.append("event[photo]", image);
    }
    // Only clear the fields if the discard button is pressed.
    dispatch(createEvent(eventData))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) {
          setFormErrors([data.errors]);
        } else if (data) {
          setFormErrors([data]);
        } else {
          setFormErrors([res.statusText]);
        }
      });
    // Clear the form fields.
    handleReset();
    if (formErrors.length === 0) {
      history.push('/user/hosted-events');
    }
  };

  const handleReset = (e) => {
    setTitle("");
    setBody("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
    setLocation("");
    setAddress("");
    setImage("");
    setCapacity("");
  }

  const validateDate = () => {
    const errors = [];
    if (endDate && startDate > endDate) {
      errors.push("Start Date must be before the End date.");
    } else if (startDate === endDate && startTime > endTime) {
      errors.push("Start Time must be before the End time.");
    }
    return errors;
  }



  return (
    <div>
      <div className="event-form-container">
        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-basic-info">
            <h1>Basic Info</h1>
            <p>Name your event and tell event-goes why they should come. Add details that highlight what makes it unique.</p>
            <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Event Description" value={body} onChange={(e) => setBody(e.target.value)} required />
            <label hmtlfor="event-image">Event Image</label>
            <input type="file" id="event-image" ref={imageInputRef} onChange={handleImage} />
            {image &&
              <div className="image-preview">
                <button onClick={handleClearAttachment}>Remove</button>
                <img src={URL.createObjectURL(image)} alt="preview" />
              </div>}

            <label hmtlfor="host-options">Organizer</label>
            <select id="host-options" defaultValue={`${currentUser?.firstName} ${currentUser?.lastName}`}>
              <option value>{`${currentUser?.firstName} ${currentUser?.lastName}`}</option>
            </select>
          </div>
          <div className="form-location">
            <h1>Location</h1>
            <p>Help people in the area discover your event and let attendees know where to show up.</p>
            <input type="text" placeholder="Venue Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <input type="text" placeholder="Street Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input type="text" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
          </div>
          <div className="form-date-time">
            <h1>Date and Time</h1>
            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
            <div className="date-time-inputs">
              <div className="event-start">
                <label hmtlfor="start-date">Start Date</label>
                <input type="date" id="start-date" value={startDate} onChange={(e) => {
                  setStartDate(e.target.value);
                  setFormErrors([]);
                  setFormErrors(validateDate());
                }} required />
                <label hmtlfor="start-time">Start Time</label>
                <input type="time" id="start-time" value={startTime} onChange={(e) => {
                  setStartTime(e.target.value);
                  setFormErrors([]);
                  setFormErrors(validateDate());
                }} required />
              </div>
              <div className="event-end">
                <label hmtlfor="end-date">End Date</label>
                <input type="date" id="end-date" value={endDate} onChange={(e) => {
                  setEndDate(e.target.value);
                  setFormErrors([]);
                  setFormErrors(validateDate());
                }} />
                <label hmtlfor="end-time">End Time</label>
                <input type="time" id="end-time" value={endTime} onChange={(e) => {
                  setEndTime(e.target.value);
                  setFormErrors([]);
                  setFormErrors(validateDate());
                }} />
              </div>
            </div>
            <div className="error-container">
              {formErrors.map(error => <p className="form-error" key={error}>{error}</p>)}
            </div>
          </div>
          <div className="form-submit">
            <button className="reset-button" type="reset" onClick={handleReset}>Discard</button>
            <button type="submit">Create Event</button>
          </div>
        </form >
      </div >
    </div>
  )
}
