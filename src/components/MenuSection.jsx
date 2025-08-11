import React from "react";
import { motion } from "framer-motion";
import MenuListCard from "./MenuListCard";
import {
  lazyContainer,
  smoothFade,
  fadeFromLeft,
  fadeFromRight,
} from "../ui/animation";

const MenuSection = (props) => {
  return (
    <section
      className={`${props.title} ${
        props.imageLeft ? "bg-white" : "bg-neutral-950 text-white"
      }`}
    >
      <motion.div
        className="container max-w-7xl mx-auto px-6 py-24"
        variants={lazyContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="menu-content space-y-10">
          {/* Heading */}
          <motion.div
            className="starters-heading menu-heading pb-10"
            variants={smoothFade}
          >
            <h3 className="title capitalize heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
              {props.title}
            </h3>
          </motion.div>

          {/* Image/Menu List Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10">
            {props.imageLeft ? (
              <>
                {/* Image on Left */}
                <motion.div
                  className="starters-col menu-col"
                  variants={fadeFromLeft}
                >
                  <div className="col-img center">
                    <img
                      src={props.sideImage}
                      className="image w-full"
                      alt={props.title}
                    />
                  </div>
                </motion.div>

                {/* Menu List on Right */}
                <motion.div
                  className="starters-col menu-col"
                  variants={fadeFromRight}
                >
                  <MenuListCard menuList={props.menuList} />
                </motion.div>
              </>
            ) : (
              <>
                {/* Menu List on Left */}
                <motion.div
                  className="starters-col menu-col"
                  variants={fadeFromLeft}
                >
                  <MenuListCard menuList={props.menuList} />
                </motion.div>

                {/* Image on Right */}
                <motion.div
                  className="starters-col menu-col"
                  variants={fadeFromRight}
                >
                  <div className="col-img center">
                    <img
                      src={props.sideImage}
                      className="image w-full"
                      alt={props.title}
                    />
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;
