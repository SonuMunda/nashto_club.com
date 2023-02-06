import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style/Header.css";
import logo from "/images/Brand.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="space-between">
      <div className="brand">
        <NavLink to="/" className="text-decoration-none">
          <img
            src={logo}
            alt="Nashto Club"
            style={{ height: "48px", padding: "4px" }}
          />
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
                to="/registration"
                className="btn-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <button className="nav-btn">Registrations</button>
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
