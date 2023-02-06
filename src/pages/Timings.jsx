import React from "react";
import LocationMap from "../components/LocationMap";
import "./style/Timings.css";

const Timings = () => {
  return (
    <div className="timings-wrapper">
      <section id="timings-intro" className="center">
        <div className="timings-intro-container">
          <div className="brand-name">
            <h3 className="pb-3">Nashto</h3>
          </div>
          <h1 className="timings-heading fw-bold">Hours & Location</h1>
          <p className="time-alert-msg pt-3">
            Don't forget to check the timings before ordering{" "}
          </p>
        </div>
      </section>

      <hr />

      <section id="timings-details" className="center">
        <div className="timings-details-container center flex-column">
          <div className="timing-heading pt-2 pb-4">
            <h1 className="pt-2 text-uppercase fw-bold text-light">Timings</h1>
          </div>
          <div className="timings-details-row py-4">
            <div className="timings-details-col">
              <div className="timing-title">
                <h4 className="heading">Opening Timings</h4>
              </div>
              <div className="timings-desc center flex-column">
                <p className="pb-2 text-uppercase text-success fw-bold">
                  Open Every Day of Week !
                </p>
                <h6 className="days pb-1">Monday - Thursday</h6>
                <p className="time pb-3">07:00AM - 10:00PM</p>
                <h6 className="days pb-1">Friday - Saturday</h6>
                <p className="time pb-3">08:00AM - 10:30PM</p>
                <h6 className="days pb-1">Sunday</h6>
                <p className="time pb-3">09:30AM - 10:30PM</p>
              </div>
            </div>
            <div className="timings-details-col">
              <div className="timing-title">
                <h4 className="heading">Ordering Timings</h4>
                <div className="timings-desc center flex-column">
                  <h6 className="food-category">Brunch</h6>
                  <p className="pb-3">09:00AM - 10:30AM</p>
                  <h6 className="food-category">Lunch</h6>
                  <p className="pb-3">11:00AM - 01:00PM</p>
                  <h6 className="food-category">Dinner</h6>
                  <p className="pb-3">05:00AM - 07:30PM</p>

                  <p className="pb-3 px-2 text-uppercase text-danger fw-bold">
                    "Ordering Brunch is not possible on Sundays"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="location">
        <div className="location-container center flex-column py-3">
          <div className="location-heading heading">
            <h1>We are Located Here</h1>
          </div>
          <div className="location-address">
            <h5 className="text-uppercase">
              Near Civil Hospital Kharar, Mohali Road, PB, India
            </h5>
          </div>
          <LocationMap />
        </div>
      </section>
    </div>
  );
};

export default Timings;
