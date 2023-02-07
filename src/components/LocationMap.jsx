import React from "react";

const LocationMap = () => {
    const mapContainerStyle = {
        width:"100%",
        margin:"1rem 0",
        overflow:"hidden"

    }
  return (
    <div className="map-container" style={mapContainerStyle}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3428.764106905516!2d76.6289170757206!3d30.753126974574435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ1JzExLjMiTiA3NsKwMzcnNTMuNCJF!5e0!3m2!1sen!2sin!4v1675082225061!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
