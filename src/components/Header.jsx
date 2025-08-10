import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/favicon.png";
import { MdMenu } from "react-icons/md";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/timings", label: "Timings" },
  { to: "/menu", label: "Menu" },
  { to: "/story", label: "Our Story" },
  { to: "/order", label: "Order Online" },
  { to: "/contact", label: "Contact" },
];

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header fixed top-0 left-0 w-full bg-neutral-950 text-white z-10">
      <div className="container relative max-w-7xl mx-auto px-2 sm:px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="menubar block lg:hidden">
            <div onClick={() => setIsOpen(!isOpen)}>
              <MdMenu size={24} />
            </div>
          </div>
          <div className="brand">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={logo} alt="nashtoclub" className="h-8 w-8" />
              <h4 className="cursive-text text-orange-500 text-xl font-bold">
                <span>nashto</span>
                <span>club</span>
              </h4>
            </NavLink>
          </div>
        </div>

        <nav
          className={`navbar ${
            isOpen ? "block" : "hidden"
          } p-4 w-full text-left absolute top-full left-0 bg-neutral-950 z-10 lg:relative lg:block lg:p-0 lg:w-fit` }
        >
          <ul className="nav-list flex flex-col lg:flex-row lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.to} className="nav-list-items">
                <NavLink
                  to={link.to}
                  className="nav-links block p-2  rounded hover:bg-neutral-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-btn bg-orange-600 py-2 px-4 rounded-full text-white"
          onClick={(e) => {
            e.preventDefault();
            props.openWidget(true);
          }}
        >
          Book a Table
        </button>
      </div>
    </header>
  );
};

export default Header;
