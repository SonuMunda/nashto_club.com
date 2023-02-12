import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";
import logo from '../assets/favicon.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="f-row">
          <div className="f-cols vertical-center">
            <div className="brand">
            <Link to="/" className="text-decoration-none center">
              <img src={logo} alt="plate" style={{ height: "32px" }} className="mx-1" />
              <h4
                style={{ color: "var(--materialRed)" }}
                className=" fw-bold"
              >
                Nashto Club
              </h4>
            </Link>
          </div>
          </div>
          <div className="f-cols" id="contact-col">
            <div className="contacts">
            <h6 className="f-heading py-1">Contact</h6>
              <ul className="contacts-list">
                <li className="contact-list-items">
                  <i className="fa-solid fa-location-dot"></i> Near Civil Hospital,
                  kharar, Mohali
                </li>
                <li className="contact-list-items">
                  <i className="fa-sharp fa-solid fa-envelope"></i>{" "}
                  nashtoclub@email.com
                </li>
                <li className="contact-list-items">
                  <i className="fa-sharp fa-solid fa-headset"></i>{" "}
                  nashtoclub@care.com
                </li>
                <li className="contact-list-items">
                  <i className="fa-sharp fa-solid fa-phone"></i> +91 80808-08080
                </li>
                <li className="contact-list-items">
                  <i className="fa-sharp fa-solid fa-globe"></i> www.nashtoclub.com
                </li>
              </ul>
            </div>
          </div>
          <div className="f-cols" id="about-col">
            <div className="about">
              <h6 className="f-heading py-1">About Nashto Club</h6>
              <p>
                Our main moto is to serve you tasty meals. Visit our place and
                enjoy food.
              </p>
              <h6 className="f-heading py-1">Follow us -</h6>
              <ul className="media-list">
                <li className="list-items">
                  <a href="/" className="media-link">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="list-items">
                  <a href="/" className="media-link">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="list-items">
                  <a href="/" className="media-link">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="list-items">
                  <a href="/" className="media-link">
                    <i className="fa-brands fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-items">
                  <a href="/" className="media-link">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="f-row-2 py-4"  style={{backgroundColor:"var(--materialRed)"}}>
      <p className="text-center text-light">&copy; All copyrights are researved | Nashto Club | 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
