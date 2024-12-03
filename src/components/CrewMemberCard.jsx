import React from "react";
import "./style/CrewCard.css"
const CrewMemberCard = (props) => {
  return (
    <div className="crew-card-row center py-4">
      {props.crewList.map((crew) => (
        <div className="crew-card center" key={crew.id} id={crew.id}>
          <div className="crew-image">
            <img src={crew.image} className="image" alt={crew.name} />
          </div>
          <div className="crew-name">
            <h4 className="pt-3 text-uppercase">{crew.name}</h4>
          </div>
          <div className="crew-post">
            <p>{crew.post}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrewMemberCard;
