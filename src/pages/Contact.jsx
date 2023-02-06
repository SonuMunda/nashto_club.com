import React from "react";
import "./style/Contact.css";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div id="contact-intro" className="center">
        <div className="contact-intro-container flex-column center">
          <div className="contact-title">
            <h1>Get in Touch</h1>
          </div>
          <div className="phone">
            <p>
              <i class="fa-solid fa-phone"></i> <span>Phone:</span>{" "}
              <span>+91 80808-08080</span>
            </p>
          </div>
          <div className="mail">
            <p>
              <i class="fa-solid fa-envelope"></i> <span>Email:</span>{" "}
              <span className="text-danger">nashtoclub@email.com</span>
            </p>
          </div>
          <div className="address">
            <i class="fa-solid fa-location-dot"></i> <span>Address:</span>{" "}
            <span>Near Civil Hospital, kharar, Mohali</span>
          </div>

          <div className="form-container">
            <form action="">
              <div className="form-row center ">
                <div className="form-col">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name-field"
                      className="user-inputs"
                      id="name-field"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email-field"
                      className="user-inputs"
                      id="email-field"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone-field"
                      className="user-inputs"
                      id="phone-field"
                    />
                  </div>
                </div>
                <div className="form-col">
                  <div className="form-group">
                    <textarea
                      name="msg-area"
                      className="user-inputs"
                      id="msg-area"
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
