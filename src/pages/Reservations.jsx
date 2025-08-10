import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdClose } from "react-icons/md";

const Reservation = (props) => {
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

    toast.success(
      "Thank you for booking table we will send you datails of your booking.Have a Happy Meal!",
      {
        position: "top-center",
      }
    );
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      partySize: "",
      time: "",
    });
  };

  return (
    <>
      <Toaster />
      <section
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 ${
          props.isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded shadow-2xl w-full max-w-lg relative p-6 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => props.setOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          >
            <MdClose size={24} />
          </button>

          {/* Title */}
          <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center">
            Reservations
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
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
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@email.com"
                onChange={handleChange}
                value={formData.email}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
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
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* People */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                People
              </label>
              <select
                name="partySize"
                id="party-size"
                onChange={handleChange}
                value={formData.partySize}
                required
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Choose Party Size</option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Person" : "People"}
                  </option>
                ))}
              </select>
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <select
                name="time"
                id="time"
                onChange={handleChange}
                value={formData.time}
                required
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Choose Timings</option>
                {[
                  "09:00AM",
                  "10:00AM",
                  "11:00AM",
                  "12:00PM",
                  "01:00PM",
                  "02:00PM",
                  "03:00PM",
                  "04:00PM",
                  "05:00PM",
                  "06:00PM",
                  "07:00PM",
                  "08:00PM",
                  "09:00PM",
                ].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <div className="text-center">
              <input
                type="submit"
                value="Book Table"
                className="bg-orange-500  w-full p-4 hover:bg-orange-600 text-white font-semibold rounded transition duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reservation;
