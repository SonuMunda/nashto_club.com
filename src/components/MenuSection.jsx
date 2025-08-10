import React from "react";
import MenuListCard from "./MenuListCard";

const MenuSection = (props) => {
  return (
    <section className={`${props.title} ${props.imageLeft? "bg-white": "bg-neutral-950 text-white"}`}>
      <div className="container max-w-7xl mx-auto p-4 py-24">
        <div className="menu-content space-y-10">
          <div className="starters-heading menu-heading pb-10">
            <h3 className="title capitalize heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
              {props.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10">
            {props.imageLeft ? (
              <>
                <div className="starters-col menu-col">
                  <div className="col-img center">
                    <img
                      src={props.sideImage}
                      className="image w-full"
                      alt="garlic-soup"
                    />
                  </div>
                </div>
                <div className="starters-col menu-col">
                  <MenuListCard menuList={props.menuList} />
                </div>
              </>
            ) : (
              <>
                <div className="starters-col menu-col">
                  <MenuListCard menuList={props.menuList} />
                </div>
                <div className="starters-col menu-col">
                  <div className="col-img center">
                    <img
                      src={props.sideImage}
                      className="image w-full"
                      alt="garlic-soup"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
