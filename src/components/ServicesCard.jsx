import React from "react";
import './style/ServiceCard.css'

const ServicesCard = (props) => {
  return (
    <div className="services-card-row">
      {props.services.map((service) => (
        <div className="services-card" key={service.id} id={service.id}>
          <div className="service-title">
            <h3 className="py-3">{service.name}</h3>
          </div>
          <div className="service-img">
            <img src={service.img} alt={`$service.id image`} />
          </div>
          <div className="service desc">
            <p className="py-2 px-3">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
