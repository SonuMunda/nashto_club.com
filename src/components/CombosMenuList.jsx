import React from "react";
import "./style/CombosMenuList.css";
const CombosMenuList = (props) => {
  return (
    <div className="combo-list center flex-column" style={{width:"100%"}}>
      {props.combosList.map((combo) => (
        <div className="combo-list-item" key={combo.id} id={combo.id}>
          <div className="dish-id">
            <h6>{combo.id}</h6>
          </div>
          <div className="items-details">
            <div className="combo-inner-row">
              <div className="dish-name">
                <h6>{combo.name}</h6>
              </div>
              <div className="dish-price">
                <h6>&#8377; {combo.price}</h6>
              </div>
            </div>
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
