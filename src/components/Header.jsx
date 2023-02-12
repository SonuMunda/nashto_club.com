import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style/Header.css";
import logo from "../assets/favicon.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="space-between">
      <div className="brand">
        <NavLink to="/" className="text-decoration-none center">
          <img src={logo} alt="" style={{ height: "32px" }} className="mx-1" />
          <h4
            style={{ color: "var(--materialRed)" }}
            className=" fw-bold"
          >
            Nashto Club
          </h4>
        </NavLink>
      </div>
      <nav className={isOpen ? "navbar nav-active" : "navbar"}>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-list-items">
              <NavLink
                to="/timings"
                className="nav-links"
                onClick={() => setIsOpen(!isOpen)}
              >
                Hours & Location
              </NavLink>
            </li>
            <li className="nav-list-items">
              <NavLink
                to="/menu"
                className="nav-links"
                onClick={() => setIsOpen(!isOpen)}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-list-items">
              <NavLink
                to="/story"
                className="nav-links"
                onClick={() => setIsOpen(!isOpen)}
              >
                Our Story
              </NavLink>
            </li>
            <li className="nav-list-items">
              <NavLink
                to="/order"
                className="nav-links"
                onClick={() => setIsOpen(!isOpen)}
              >
                Order Online
              </NavLink>
            </li>
            <li className="nav-list-items">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-list-items">
              <NavLink
                to="#"
                className="btn-link"
                onClick={(e) => {
                  setIsOpen(!isOpen);
                  e.preventDefault();
                  props.openWidget();
                }}
              >
                <button className="nav-btn">Reservation</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="menubar">
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
