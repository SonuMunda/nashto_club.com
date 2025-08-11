import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-gradient-to-br from-orange-200 to-orange-100 backdrop-blur z-100">
      <img
        src="/images/favicon.png"
        alt="Loading spinner"
        className="spinner w-16 animate-spin"
      />
    </div>
  );
};

export default Loader;
