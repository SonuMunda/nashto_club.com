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
          <h3 className="timings-heading fw-bold">Hours & Location</h3>
          <p className="time-alert-msg pt-3">
            Don't forget to check the timings before ordering.
          </p>
        </div>
      </section>

      <section id="timings-details" className="center py-4">
        <div className="timings-details-container center flex-column">
          <div className="timing-heading pt-2 pb-4">
            <h1 className="px-4 py-2 fw-bold block">Timings</h1>
          </div>
          <div className="timings-details-row py-4">
            <div className="timings-details-col border border-2">
              <div className="timing-title mb-4">
                <h4 className="heading border-bottom border-2">
                  Opening Timings
                </h4>
              </div>
              <div className="timings-desc center flex-column">
                <p className="pb-2 text-success fw-bold">
                  Open Every Day of Week !
                </p>
                <div className="day-time text-center mb-4">
                  <h6 className="days">Monday - Thursday</h6>
                  <p className="time">07:00AM - 10:00PM</p>
                </div>
                <div className="day-time text-center mb-4">
                  <h6 className="days">Friday - Saturday</h6>
                  <p className="time">08:00AM - 10:30PM</p>
                </div>

                <div className="day-time text-center mb-4">
                  <h6 className="days">Sunday</h6>
                  <p className="time">09:30AM - 10:30PM</p>
                </div>
              </div>
            </div>
            <div className="timings-details-col border border-2">
              <div className="timing-title">
                <h4 className="heading border-bottom border-2 mb-4">
                  Ordering Timings
                </h4>
                <p className="mb-4 text-danger text-center">
                  "Ordering is not possible outside Kharar"
                </p>
                <div className="timings-desc center flex-column">
                  <div className="category-time mb-4 text-center">
                    <h6 className="food-category">Brunch</h6>
                    <p className="time">09:00AM - 10:30AM</p>
                  </div>
                  <div className="category-time mb-4 text-center">
                    <h6 className="food-category">Lunch</h6>
                    <p className="time">11:00AM - 01:00PM</p>
                  </div>
                  <div className="categoryy-time mb-4 text-center">
                    <h6 className="food-category">Dinner</h6>
                    <p className="time">05:00AM - 07:30PM</p>
                  </div>

                  <p className="pb-3 px-2 text-danger  text-center">
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
        <div className="location-container center flex-column pt-3">
          <div className="location-heading heading px-4 py-2">
            <h1>We are Located Here</h1>
          </div>
          <div className="location-address">
            <h5 className="text-center px-2">
              Near Civil Hospital Kharar, Mohali Road, PB, India
            </h5>
          </div>
          <div className="maps container">
            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timings;
