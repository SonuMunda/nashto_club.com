import React from "react";
import "./style/BestDishesCard.css";

const BestDishesCard = (props) => {
  return (
    <div className="best-dishes-row center">
      {props.bestDishes.map((bestDish) => (
        <div className="best-dish-card" key={bestDish.id} id={bestDish.id}>
          <div className="best-dish-title">
            <h3 className="py-4 fw-bold">{bestDish.dishName}</h3>
          </div>
          <div className="best-dish-img">
            <img src={bestDish.img} alt={bestDish.dishName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestDishesCard;
