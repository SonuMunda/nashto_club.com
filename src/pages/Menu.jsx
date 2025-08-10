import React from "react";

import StartersListData from "../assets/api/StartersListData";
import startersImg from "/images/starters-garlic-soup.jpg";
import brunchImg from "/images/Brunch-Menu.png";
import BrunchMenuList from "../assets/api/BrunchMenuList";
import lunchImg from "/images/Lunch-Menu.png";
import LunchMenuList from "../assets/api/LunchMenuList";
import dinnerImg from "/images/Dinner-Menu.png";
import DinnerMenuList from "../assets/api/DinnerMenuList";
import CombosList from "../assets/api/CombosList";
import CombosMenuList from "../components/CombosMenuList";
import MenuSection from "../components/MenuSection";

const Menu = () => {
  return (
    <main>
      <section
        id="menu-intro"
        className="hero min-h-[65vh] bg-neutral-950 flex items-center justify-center"
      >
        <div className="container max-w-7xl mx-auto p-4 py-24">
          <div className="intro-heading">
            <h3 className="text-center cursive-text text-orange-500 font-bold text-4xl sm:text-5xl">
              Nashto Menu
            </h3>
          </div>
        </div>
      </section>

      <MenuSection
        title={"starters"}
        menuList={StartersListData}
        sideImage={startersImg}
        imageLeft={true}
      />
      <div className="border-b border-neutral-400"></div>
      <MenuSection
        title={"brunch"}
        menuList={BrunchMenuList}
        sideImage={brunchImg}
        imageLeft={false}
      />

      <MenuSection
        title={"lunch"}
        menuList={LunchMenuList}
        sideImage={lunchImg}
        imageLeft={true}
      />

      <MenuSection
        title={"dinner"}
        menuList={DinnerMenuList}
        sideImage={dinnerImg}
        imageLeft={false}
      />

      <section id="combos">
        <div className="container max-w-7xl mx-auto p-4 py-24">
          <div className="combo-contents space-y-10 mx-auto">
            <div className="combos-heading menu-heading">
              <h3 className="title capitalize text-center cursive-text text-orange-500 font-bold text-4xl sm:text-5xl">
                Combos
              </h3>
            </div>

            <div className="combos-menu-desc">
              <CombosMenuList combosList={CombosList} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
