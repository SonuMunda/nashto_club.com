import React, { useState } from "react";
import "./style/Reservation.css";
import { FaTimes } from "react-icons/fa";
const Reservation = () => {

  const CloseWidget = () => {
    document.getElementById("res-widget").style.height = "0%";
  };

  return (
    <div className="reservation-wrapper">
      <div
        className="reservation-form-widget horizontal-center"
        id="res-widget" style={{height:"0%"}}
      >
        <div className="res-form-container">
          <div className="res-form-row">
            <div className="close-btn" onClick={CloseWidget}>
              <FaTimes />
            </div>
            <div className="res-title">
              <h6 className="text-uppercase py-2">Reservations</h6>
            </div>
          </div>

          <form action="" id="res-form">
            <div className="res-form-group">
              <label>Full Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="res-form-group">
              <label>Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="res-form-group">
              <label>Phone</label>
              <input type="text" name="phone" id="phone" required />
            </div>
            <div className="res-form-group">
              <label>People</label>
              <select name="partySize" id="party-size">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
              </select>
            </div>
            <div className="res-form-group">
              <label>Time</label>
              <select name="time" id="time">
                <option value="09:00AM">09:00AM</option>
                <option value="10:00AM">10:00AM</option>
                <option value="11:00AM">11:00AM</option>
                <option value="12:00PM">12:00PM</option>
                <option value="01:00PM">01:00PM</option>
                <option value="02:00PM">02:00PM</option>
                <option value="03:00PM">03:00PM</option>
                <option value="04:00PM">04:00PM</option>
                <option value="05:00PM">05:00PM</option>
                <option value="06:00PM">06:00PM</option>
                <option value="07:00PM">07:00PM</option>
                <option value="08:00PM">08:00PM</option>
                <option value="09:00PM">09:00PM</option>
              </select>
            </div>

            <div className="res-btn-container center mt-3">
              <input
                type="submit"
                value="Book Table"
                name="resbtn"
                id="res-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
