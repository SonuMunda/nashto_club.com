import React from "react";
import { NavLink } from "react-router-dom";

import "./style/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <section id="error-page" className="center">
        <div className="error-page-container text-center">
          <div className="error-reaction">
              <i class="fa-regular fa-face-dizzy"></i>
          </div>

          <div className="error-type">
            <h4>404</h4>
          </div>

          <div className="error-msg">
            <p>Page not Found</p>
          </div>

          <div className="error-line">
            <p>The page you are looking for doesn't or an other error occur.</p>
            <p>
              Go Back, or head over to <NavLink to="/">nashtoclub.com</NavLink>{" "}
              to choose the direction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
