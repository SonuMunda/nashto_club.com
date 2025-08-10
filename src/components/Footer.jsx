import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineLanguage,
} from "react-icons/md";

const contactInfo = [
  {
    Icon: MdOutlineLocationOn,
    text: "Near Civil Hospital, Kharar, Mohali",
  },
  {
    Icon: MdOutlineEmail,
    text: "nashtoclub@email.com",
  },
  {
    Icon: MdOutlinePhone,
    text: "+91 80808-08080",
  },
  {
    Icon: MdOutlineLanguage,
    text: "www.nashtoclub.netlify.app",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="plate" className="h-8" />
              <h4 className="font-bold cursive-text text-orange-500 text-xl">
                nashtoclub
              </h4>
            </Link>
            <p className="mt-4 text-neutral-200  ">
              Our main motto is to serve you tasty meals. Visit our place and
              enjoy food.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold text-neutral-200 mb-4">
              Contact Us
            </h6>
            <ul className="space-y-3">
              {contactInfo.map(({ Icon, text }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-neutral-200"
                >
                  <Icon className="text-orange-500 text-xl" />
                  <span className="">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="text-lg font-semibold text-neutral-200 mb-4">
              Useful Links
            </h6>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/" },
                { name: "Timings", to: "/timings" },
                { name: "Menu", to: "/menu" },
                { name: "Our Story", to: "/story" },
                { name: "Order Online", to: "/order" },
                { name: "Contact", to: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className=" text-neutral-200 hover:text-orange-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-neutral-950 py-4">
        <p className="text-center text-neutral-300 ">
          &copy; {new Date().getFullYear()} NashtoClub — Developed by Sonu Munda
        </p>
      </div>
    </footer>
  );
};

export default Footer;
