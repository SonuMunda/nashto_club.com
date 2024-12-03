import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

const Footer = () => {
  return (
    <footer className="center flex-column">
      <div className="footer-container">
        <div className="f-row">
          <div className="f-cols d-flex flex-column gap-1">
            <div className="footer-brand">
              <Link to="/" className="text-decoration-none vertical-center">
                <img
                  src={logo}
                  alt="plate"
                  style={{ height: "32px" }}
                  className="mx-1"
                />
                <h4 style={{ color: "var(--text-black)" }} className=" fw-bold">
                  nashtoclub
                </h4>
              </Link>
            </div>

            <p className="mt-4">
              Our main moto is to serve you tasty meals. Visit our place and
              enjoy food.
            </p>

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
          <div className="f-cols" id="contact-col">
            <div className="contacts center flex-column">
              <h6 className="f-heading py-1 text-dark mb-2">Contact us</h6>
              <ul className="contacts-list">
                <li className="contact-list-items text-dark vertical-center gap-2 my-3">
                  <i className="fa-solid fa-location-dot fs-4"></i>
                  <span className="ms-2">
                    Near Civil Hospital, kharar, Mohali
                  </span>
                </li>
                <li className="contact-list-items text-dark vertical-center gap-2 my-3">
                  <i className="fa-sharp fa-solid fa-envelope fs-4 "></i>
                  <span className="ms-2">nashtoclub@email.com</span>
                </li>
                <li className="contact-list-items text-dark vertical-center gap-2 my-3">
                  <i className="fa-sharp fa-solid fa-headset fs-4 "></i>
                  <span className="ms-2"> nashtoclub@care.com</span>
                </li>
                <li className="contact-list-items text-dark vertical-center gap-2 my-3">
                  <i className="fa-sharp fa-solid fa-phone fs-4 "></i> +91
                  80808-08080
                </li>
                <li className="contact-list-item text-dark vertical-center gap-2 my-3">
                  <i className="fa-sharp fa-solid fa-globe fs-4 "></i>
                  <span className="ms-2">www.nashtoclub.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="f-cols center flex-column" id="usefull-links-col ">
            <h6 className="f-heading py-1 text-dark mb-2">Usefull links</h6>
            <ul className="usefull-links">
              <li className="links-items my-2">
                <Link
                  to="/"
                  className="usefull-links text-decoration-none text-dark"
                >
                  Home
                </Link>
              </li>
              <li className="links-items my-2">
                <Link
                  to="/timings"
                  className="usefull-links text-decoration-none text-dark"
                >
                  Timings
                </Link>
              </li>
              <li className="links-items my-2">
                <Link
                  to="/menu"
                  className="usefull-links text-decoration-none text-dark"
                >
                  Menu
                </Link>
              </li>
              <li className="links-items my-2">
                <Link
                  to="/story"
                  className="usefull-links text-decoration-none text-dark"
                >
                  Our Story
                </Link>
              </li>
              <li className="links-items my-2">
                <Link
                  to="/order"
                  className="usefull-links text-decoration-none text-dark"
                >
                  Order Online
                </Link>
              </li>
              <li className="links-items my-2">
                <Link
                  to="/contact"
                  className="usefull-links text-decoration-none text-dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="f-row-2 border-top bg-white w-100">
        <p className="text-center text-dark m-4">
          &copy; All copyrights are researved | Nashto Club | 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
