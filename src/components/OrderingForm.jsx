import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./style/OrderingForm.css";

function OrderingForm({
  orderDetails,
  isOrderFormActive,
  setIsOrderFormActive,
}) {
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderDetails: orderDetails,
    }));
  }, [orderDetails]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    orderDetails: orderDetails,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    });

    setIsOrderFormActive(false);

    alert("Ordering Nashto is successfull.Thankyou for Visiting! ");
  };
  return (
    <section
      className={`order-form center ${
        isOrderFormActive ? "order-form-active" : ""
      }`}
      id="order-form"
    >
      <div className="order-form-container flex-column center">
        <div
          className="close-btn"
          onClick={() => {
            setIsOrderFormActive(false);
          }}
        >
          <FaTimes />
        </div>
        <div className="form-title">
          <h4 className="p-4 fw-bold">Nasto Order</h4>
        </div>
        <form onSubmit={handleFormSubmit} id="ordering-form">
          <div className="form-group">
            <label htmlFor="f-name">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-input border"
              value={formData.firstName}
              pattern="[A-Za-z\s]+"
              minLength={4}
              maxLength={24}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="l-name">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-input border"
              value={formData.lastName}
              pattern="[A-Za-z\s]+"
              minLength={4}
              maxLength={24}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-input border"
              value={formData.phone}
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={12}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-input border"
              value={formData.email}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-input border"
              value={formData.address}
              minLength={4}
              maxLength={50}
              required
              onChange={handleChange}
            />
          </div>

          <div className="px-1 py-3">
            <input className="ordering-btn" type="submit" value="Order" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default OrderingForm;
