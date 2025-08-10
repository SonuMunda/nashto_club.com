import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
const CombosMenuList = (props) => {
  return (
    <div className="combo-list space-y-6">
      {props.combosList.map((combo) => (
        <div
          className="combo-list-item bg-neutral-950 text-white p-4 rounded flex items-center gap-6"
          key={combo.id}
          id={combo.id}
        >
          <div className="dish-id">
            <h6 className="p-4 text-xl font-bold">{combo.id}</h6>
          </div>
          <div className="items-details space-y-2 w-full">
            <div className="combo-inner-row text-xl font-bold flex justify-between">
              <div className="dish-name">
                <h6>{combo.name}</h6>
              </div>
              <div className="dish-price flex items-center text-orange-500">
                <MdCurrencyRupee />
                <h6>{combo.price}</h6>
              </div>
            </div>
            <hr />
            <div className="dishes-names">
              <p>{combo.dishes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CombosMenuList;
