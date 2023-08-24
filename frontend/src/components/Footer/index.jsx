import React from "react";
import "./Footer.css";
import logo from "../../assets/eventOrange.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-one">
          <h3>Use EventOrange</h3>
          <p>Create Events</p>
          <p>Pricing</p>
          <p>Event Marketing Platform</p>
          <p>EventOrange Mobile Ticket App</p>
          <p>EventOrange Check-In App</p>
          <p>EventOrange App Marketplace</p>
          <p>Event Registration Software</p>
          <p>Content Standards</p>
          <p>FAQs</p>
          <p>Sitemap</p>
        </div>
        <div className="footer-two">
          <h3>Plan Events</h3>
          <p>Sell Tickets Online</p>
          <p>Event Planning</p>
          <p>Sell Concert Tickets Online</p>
          <p>Event Payment System</p>
          <p>Solutions for Professional Services</p>
          <p>Event Management Software</p>
          <p>Halloween Party Planning</p>
          <p>Virtual Events Platform</p>
          <p>QR Code for Event Check-In</p>
          <p>Post your event online</p>
        </div>
        <div className="footer-three">
          <h3>Find Events</h3>
          <p>Browse San Francisco Events</p>
          <p>Get the EventOrange App</p>
        </div>
        <div className="footer-four">
          <h3>Connect With Us</h3>
          <p>Contact Support</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
      </div>
      <img src={logo}></img>
      <h2>© 2023 EventOrange, Inc. All rights reserved.</h2>
    </div>
  )
}
