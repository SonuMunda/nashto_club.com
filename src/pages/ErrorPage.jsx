import React from "react";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <section className="">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="content flex flex-col items-center justify-center text-center">
            {/* Icon */}
            <div className="text-orange-500 ">
              <MdOutlineSentimentVeryDissatisfied size={100} />
            </div>

            {/* Error code */}
            <h1 className="text-8xl font-extrabold text-neutral-900">404</h1>

            {/* Message */}
            <p className="mt-4 text-lg text-neutral-600">Page not Found</p>
            <p className="mt-2 text-neutral-500">
              The page you are looking for doesn’t exist or another error
              occurred.
            </p>

            {/* Link */}
            <div className="mt-6">
              <NavLink
                to="/"
                className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
              >
                Go Back Home
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
