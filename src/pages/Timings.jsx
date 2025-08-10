import React from "react";
import LocationMap from "../components/LocationMap";

const Timings = () => {
  return (
    <main>
      <section
        id="timings-intro"
        className="bg-neutral-950 flex items-center min-h-[65vh]"
      >
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="content text-center">
            <div className="brand-name">
              <h3 className="text-center cursive-text text-orange-500 font-bold text-4xl sm:text-5xl">
                Nashto Hours & Location
              </h3>
            </div>
            <p className="time-alert-msg text-white pt-3">
              Don't forget to check the timings before ordering.
            </p>
          </div>
        </div>
      </section>

      <section id="timings-details" className="timings">
        <div className="container max-w-7xl mx-auto px-4 py-24 space-y-10">
          <div className="timing-heading heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
            <h1 className="heading">Timings</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="timings-details-col rounded bg-neutral-950 text-white">
              <div className="header border-b-4 p-4">
                <h4 className="heading">Opening Timings</h4>
                <p className="pb-2 text-success fw-bold">
                  Open Every Day of Week !
                </p>
              </div>
              <div className="timings-desc p-4 space-y-3">
                <div className="day-time text-center">
                  <h6 className="days">Monday - Thursday</h6>
                  <p className="time">07:00AM - 10:00PM</p>
                </div>
                <div className="day-time text-center">
                  <h6 className="days">Friday - Saturday</h6>
                  <p className="time">08:00AM - 10:30PM</p>
                </div>

                <div className="day-time text-center">
                  <h6 className="days">Sunday</h6>
                  <p className="time">09:30AM - 10:30PM</p>
                </div>
              </div>
            </div>
            <div className="timings-details-col rounded bg-neutral-950 text-white">
              <div className="header p-4 border-b-4 border-white">
                <h4 className="heading text-lg font-bold">Ordering Timings</h4>
                <p className="info-text">
                  Ordering is not possible outside Kharar
                </p>
              </div>
              <div className="timings-desc text-center p-4">
                <div className="category-time">
                  <h6 className="food-category">Brunch</h6>
                  <p className="time">09:00AM - 10:30AM</p>
                </div>
                <div className="category-time">
                  <h6 className="food-category">Lunch</h6>
                  <p className="time">11:00AM - 01:00PM</p>
                </div>
                <div className="categoryy-time">
                  <h6 className="food-category">Dinner</h6>
                  <p className="time">05:00AM - 07:30PM</p>
                </div>
              </div>
              <p className="info-text text-center border-t-4 p-4">
                Ordering Brunch is not possible on Sundays
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="location bg-neutral-950">
        <div className="container max-w-7xl mx-auto px-4 py-24 space-y-10">
          <div className="timing-heading">
            <h1 className="heading heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
              We are Here
            </h1>
            <h5 className="text-center text-xl text-white">
              Near Civil Hospital Kharar, Mohali Road, PB, India
            </h5>
          </div>

          <div className="maps container">
            <LocationMap />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Timings;
