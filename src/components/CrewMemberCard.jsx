import React from "react";
const CrewMemberCard = (props) => {
  return (
    <div className="crews grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {props.crewList.map((crew) => (
        <div className="card" key={crew.id} id={crew.id}>
          <div className="crew-image">
            <img
              src={crew.image}
              className="crew image rounded w-full"
              alt={crew.name}
            />
          </div>
          <div className="crew-name">
            <h4 className="pt-3 uppercase  text-orange-500 font-bold text-2xl">
              {crew.name}
            </h4>
          </div>
          <div className="crew-post">
            <p className="text-neutral-800 ">{crew.post}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrewMemberCard;
