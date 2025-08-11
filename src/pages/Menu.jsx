import React from "react";
import { motion } from "framer-motion";

import StartersListData from "../assets/api/StartersListData";
import BrunchMenuList from "../assets/api/BrunchMenuList";
import LunchMenuList from "../assets/api/LunchMenuList";
import DinnerMenuList from "../assets/api/DinnerMenuList";
import CombosList from "../assets/api/CombosList";
import CombosMenuList from "../components/CombosMenuList";
import MenuSection from "../components/MenuSection";

import { lazyContainer, smoothFade } from "../ui/animation";

const Menu = () => {
  return (
    <main className="main w-full overflow-x-hidden">
      {/* Intro Section */}
      <section
        id="menu-intro"
        className="hero min-h-[65vh] bg-neutral-950 flex items-center justify-center"
      >
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="intro-heading" variants={smoothFade}>
            <h3 className="text-center cursive-text text-orange-500 font-bold text-4xl sm:text-5xl">
              Nashto Menu
            </h3>
          </motion.div>
        </motion.div>
      </section>

      {/* Starters */}
      <MenuSection
        title={"starters"}
        menuList={StartersListData}
        sideImage={"/images/starters-garlic-soup.jpg"}
        imageLeft={true}
      />

      <div className="border-b border-neutral-400"></div>

      {/* Brunch */}

      <MenuSection
        title={"brunch"}
        menuList={BrunchMenuList}
        sideImage={"/images/Brunch-Menu.png"}
        imageLeft={false}
      />

      {/* Lunch */}

      <MenuSection
        title={"lunch"}
        menuList={LunchMenuList}
        sideImage={"/images/Lunch-Menu.png"}
        imageLeft={true}
      />

      {/* Dinner */}

      <MenuSection
        title={"dinner"}
        menuList={DinnerMenuList}
        sideImage={"/images/Dinner-Menu.png"}
        imageLeft={false}
      />

      {/* Combos Section */}
      <section id="combos">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="combo-contents space-y-10 mx-auto">
            <motion.div
              className="combos-heading menu-heading"
              variants={smoothFade}
            >
              <h3 className="title capitalize text-center cursive-text text-orange-500 font-bold text-4xl sm:text-5xl">
                Combos
              </h3>
            </motion.div>

            <motion.div className="combos-menu-desc" variants={smoothFade}>
              <CombosMenuList combosList={CombosList} />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Menu;
