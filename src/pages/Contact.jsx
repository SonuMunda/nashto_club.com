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
    // Perform form submission logic or API call here
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-wrapper">
      <div id="contact-intro" className="center">
        <div className="contact-intro-container flex-column center">
          <div className="contact-title">
            <h1 className=" heading">Get in Touch</h1>
          </div>
          <div className="phone">
            <p>
              <i className="fa-solid fa-phone"></i> <span>Phone: </span>
              <span>+91 80808-08080</span>
            </p>
          </div>
          <div className="mail">
            <p className="my-2">
              <i className="fa-solid fa-envelope"></i> <span>Email: </span>
              <span className="text-decoration-underline">
                nashtoclub@email.com
              </span>
            </p>
          </div>
          <div className="address mb-4">
            <i className="fa-solid fa-location-dot"></i> <span>Address: </span>
            <span>Near Civil Hospital, kharar, Mohali</span>
          </div>

          <div className="form-container my-3">
            <form onSubmit={handleSubmit}>
              <div className="form-row vertical-center">
                <div className="form-col">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="user-inputs"
                      id="name-field"
                      placeholder="Ram Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      minLength={3}
                      maxLength={26}
                      pattern="[A-Za-z ]+"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="user-inputs"
                      id="email-field"
                      placeholder="ram@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      maxLength={24}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="user-inputs"
                      id="phone-field"
                      placeholder="9800000098"
                      value={formData.phone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      minLength={10}
                      maxLength={12}
                      required
                    />
                  </div>
                </div>
                <div className="form-col">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="user-inputs"
                      id="msg-area"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-msg-btn center">
                <input
                  type="submit"
                  value="Send Message"
                  name="submit"
                  id="send-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
