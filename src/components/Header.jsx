import React from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";
import logo from "/images/Brand.png";
import menuFunction from "../assets/api/menuFunction";

const Header = () => {
  return (
    <header className="space-between">
      <div className="brand">
        <Link to="/" className="text-decoration-none">
          <img src={logo} alt="Nashto Club" style={{ height: "48px", padding:"4px" }} />
        </Link>
      </div>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-list-items">
              <Link to="/timings" className="nav-links">
                Hours & Location
              </Link>
            </li>
            <li className="nav-list-items">
              <Link to="/menu" className="nav-links">
                Menu
              </Link>
            </li>
            <li className="nav-list-items">
              <Link to="/story" className="nav-links">
                Our Story
              </Link>
            </li>
            <li className="nav-list-items">
              <Link to="/order" className="nav-links">
                Order Online
              </Link>
            </li>
            <li className="nav-list-items">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
            <li className="nav-list-items">
              <Link to="/registration" className="btn-link">
                <button className="nav-btn">Registrations</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="menubar" onClick={menuFunction}>
        <div className="bar" id="bar-1"></div>
        <div className="bar" id="bar-2"></div>
        <div className="bar" id="bar-3"></div>
      </div>
    </header>
  );
};

export default Header;
