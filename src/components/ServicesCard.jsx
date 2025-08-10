import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="services-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {props.services.map((service) => (
        <div className="services-card  space-y-4" key={service.id} id={service.id}>
          <div className="service-title">
            <h3 className="text-white font-bold text-xl">{service.name}</h3>
          </div>
          <div className="service-img">
            <img src={service.img} className="w-full" alt={`$service.id image`} />
          </div>
          <div className="service desc">
            <p className="text-neutral-300">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
