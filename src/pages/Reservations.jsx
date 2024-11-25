import React, { useState } from "react";
import "./style/Reservation.css";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form or perform further actions
    toast.success(
      "Thank you for booking table we will send you datails of your booking.Have a Happy Meal!",
      {
        position: "top-center",
      }
    );
    console.log(formData);

    // Reset form data and errors
    setFormData({
      name: "",
      email: "",
      phone: "",
      partySize: "",
      time: "",
    });
  };

  const CloseWidget = () => {
    document.getElementById("res-wrapper").style.scale = "0";
  };

  return (
    <section>
      <ToastContainer />
      <div className="reservation-wrapper" id="res-wrapper">
        <div
          className="reservation-form-widget horizontal-center"
          id="res-widget"
        >
          <div className="close-btn" onClick={CloseWidget}>
            <FaTimes />
          </div>

          <div className="res-form-container">
            <div className="res-title">
              <h3 className="py-2">Reservations</h3>
            </div>

            <form onSubmit={handleSubmit} id="res-form">
              <div className="res-form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John"
                  value={formData.name}
                  onChange={handleChange}
                  pattern="[A-Za-z\s]+"
                  minLength={3}
                  maxLength={24}
                  required
                />
              </div>

              <div className="res-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@email.com"
                  onChange={handleChange}
                  value={formData.email}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  required
                />
              </div>
              <div className="res-form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="9800011198"
                  onChange={handleChange}
                  value={formData.phone}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </div>
              <div className="res-form-group">
                <label>People</label>
                <select
                  name="partySize"
                  id="party-size"
                  onChange={handleChange}
                  value={formData.partySize}
                  required
                >
                  <option value="">Choose Party Size</option>
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
                <select
                  name="time"
                  id="time"
                  onChange={handleChange}
                  value={formData.time}
                  required
                >
                  <option value="">Choose Timings</option>
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
    </section>
  );
};

export default Reservation;
