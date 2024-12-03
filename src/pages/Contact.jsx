import React, { useState } from "react";
import "./style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-wrapper center">
      <div id="contact">
        <div className="contact-details">
          <h1 className="m-4">Contact Us</h1>
          <p className="mb-2 mx-4">
            <i className="fa-solid fa-phone me-2"></i> Phone: +91 80808-08080
          </p>
          <p className="mb-2 mx-4">
            <i className="fa-solid fa-envelope me-2"></i> Email:{" "}
            <span className="text-decoration-underline">
              nashtoclub@email.com
            </span>
          </p>
          <p className="mb-2 mx-4">
            <i className="fa-solid fa-location-dot me-2"></i> Address: Near Civil
            Hospital, Kharar, Mohali
          </p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-msg-btn">
              <input type="submit" value="Send Message" id="send-btn" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
