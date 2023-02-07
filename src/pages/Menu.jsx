import React from "react";
import StartersListCards from "../components/StartersListCards";
import StartersListData from "../assets/api/StartersListData";
import "./style/Menu.css";
import startersImg from "/images/starters-garlic-soup.jpg";
import brunchImg from "/images/Brunch-Menu.png";
import BrunchMenuList from "../assets/api/BrunchMenuList";
import BrunchMenuCard from "../components/BrunchMenuCard";
import lunchImg from "/images/Lunch-Menu.png";
import LunchMenuCard from "../components/LunchMenuCard";
import LunchMenuList from "../assets/api/LunchMenuList";
import dinnerImg from "/images/Dinner-Menu.png";
import DinnerMenuList from "../assets/api/DinnerMenuList";
import DinnerMenuCard from "../components/DinnerMenuCard";
import CombosList from "../assets/api/CombosList";
import CombosMenuList from "../components/CombosMenuList";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div id="menu-intro" className="center">
        <div className="menu-intro-container center flex-column">
          <div className="intro-heading">
            <h3 className="text-center">Nashto Menu</h3>
          </div>
          <div className="intro-line">
            <p>See our Delicious Menu Items</p>
          </div>
        </div>
      </div>

      <hr />
      <section id="starters">
        <div className="starters-container">
          <div className="starters-heading menu-heading">
            <h3 className="title">Starters</h3>
          </div>
          <div className="starters-row menu-row">
            <div className="starters-col menu-col">
              <div className="col-img center">
                <img src={startersImg} className="img" alt="garlic-soup" />
              </div>
            </div>
            <div className="starters-col menu-col">
              <StartersListCards starterList={StartersListData} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="brunch">
        <div className="brunch-container">
          <div className="brunch-heading menu-heading">
            <h3 className="title">brunch</h3>
          </div>
          <div className="brunch-row menu-row flex-wrap-reverse">
            <div className="brunch-col menu-col">
              <BrunchMenuCard brunchList={BrunchMenuList} />
            </div>
            <div className="brunch-col menu-col">
              <div className="col-img center">
                <img src={brunchImg} className="img" alt="Brunch Plate" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="lunch">
        <div className="lunch-container">
          <div className="lunch-heading menu-heading">
            <h3 className="title">lunch</h3>
          </div>
          <div className="lunch-row menu-row">
            <div className="lunch-col menu-col">
              <div className="col-img center">
                <img src={lunchImg} className="img" alt="Lunch Menu" />
              </div>
            </div>
            <div className="lunch-col menu-col">
              <LunchMenuCard lunchList={LunchMenuList} />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="dinner">
        <div className="dinner-container">
          <div className="dinner-heading menu-heading">
            <h3 className="title">dinner</h3>
          </div>
          <div className="dinner-row menu-row flex-wrap-reverse">
            <div className="dinner-col menu-col">
              <DinnerMenuCard dinnerList={DinnerMenuList} />
            </div>
            <div className="dinner-col menu-col">
              <div className="col-img center">
                <img src={dinnerImg} className="img" alt="Dinner Plate" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="combos">

        <div className="combos-container pb-4">
          <div className="combos-heading menu-heading">
            <h3 className="title">Combos</h3>
          </div>

          <div className="combos-menu-desc center">
            <CombosMenuList combosList={CombosList} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
