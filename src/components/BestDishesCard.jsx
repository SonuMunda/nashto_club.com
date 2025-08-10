import React from "react";

const BestDishesCard = (props) => {
  return (
    <div className="best-dishes-card grid sm:grid-cols-3 gap-4">
      {props.bestDishes.map((bestDish) => (
        <div className="best-dish-card space-y-2" key={bestDish.id} id={bestDish.id}>
          <div className="best-dish-title">
            <h3 className="font-bold text-xl">{bestDish.dishName}</h3>
          </div>
          <div className="best-dish-img">
            <img src={bestDish.img} className="w-full" alt={bestDish.dishName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestDishesCard;
