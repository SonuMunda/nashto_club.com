import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

const MenuListCard = (props) => {
  return (
    <div className="starters-list space-y-6">
      {props.menuList.map((item) => {
        const { id, dishImg, dishName, dishPrice, abtDish } = item;
        return (
          <div
            className="starters-card list-card flex items-center gap-6"
            id={id}
            key={id}
          >
            <div className="dish-img">
              <img src={dishImg} alt={dishName} className="w-24 rounded-full" />
            </div>

            <div className="dish-details space-y-1 w-full">
              <div className="dish-details-container flex justify-between font-bold text-xl">
                <div className="dish-name">
                  <h6>{dishName}</h6>
                </div>
                <div className="dish-price flex items-center text-orange-500">
                  <MdCurrencyRupee />
                  <h6 className="text">{dishPrice}</h6>
                </div>
              </div>

              <p className="dish-line pt-1 border-t border-neutral-300">{abtDish}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuListCard;
