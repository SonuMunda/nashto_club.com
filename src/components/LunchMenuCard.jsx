import React from "react";
import "./style/ListCard.css";
const LunchMenuCard = (props) => {
  return (
    <div className="lunch-list center flex-column">
      {props.lunchList.map((lunch) => {
        const { id, dishImg, dishName, dishPrice, abtDish } = lunch;
        return (
          <div className="lunch-card list-card" id={id} key={id}>
            <div className="dish-img">
              <img src={dishImg} alt={dishName} />
            </div>
            <div className="dish-details px-3">
              <div className="dish-details-container pb-1 space-between">
                <div className="dish-name">
                  <h6>{dishName}</h6>
                </div>
                <div className="dish-price">
                  <h6>&#8377;{dishPrice}</h6>
                </div>
              </div>
              <p
                className="dish-line pt-1"
                style={{ borderTop: "2px dashed red", fontSize: "14px" }}
              >
                {abtDish}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LunchMenuCard;
