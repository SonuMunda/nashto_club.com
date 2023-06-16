import React, { useEffect } from "react";
import "./style/Home.css";
import ServicesList from "../assets/api/ServicesList";
import menuIntroImg from "/images/menu-intro-bg.jpg";
import ServicesCard from "../components/ServicesCard";
import BestDishesCard from "../components/BestDishesCard";
import BestDishesList from "../assets/api/BestDishesList";
import quoteMan from "/images/quote-man.jpg";
import { Link } from "react-router-dom";
const Home = (props) => {

  return (
    <>
      <div className="home-wrapper">
        <section id="home-intro" className="center">
          <div className="home-container center">
            <div className="greet">
              <h4 className="greet-msg pb-2">Welcome To</h4>
            </div>
            <div className="brand-name">
              <h1 className="py-2">
                <span className="text-uppercase fw-bold">Nashto Club</span>
              </h1>
            </div>
            <p className="slogan">
              You are going to Enter in the verse of great Indian Spices
            </p>

            <div className="home-btns">
              <button
                className="home-btn"
                id="reservation-btn"
                onClick={props.openWidget}
              >
                Reservations
              </button>

              <Link to="/menu">
                <button className="home-btn" id="menu-btn">
                  View our Menu
                </button>
              </Link>
            </div>
          </div>
        </section>

        <hr />

        <section id="about-menu">
          <div className="about-menu-container">
            <div className="about-menu-row px-2">
              <div className="about-menu-cols">
                <div className="menu-img">
                  <img
                    src={menuIntroImg}
                    className="rounded"
                    alt="food image"
                  />
                </div>
              </div>
              <div className="about-menu-cols">
                <div className="menu-content">
                  <div className="title">
                    <h3 className="title">Our Menu</h3>
                  </div>
                  <div className="menu-description">
                    <p className="py-4">
                      Our creative, food and beverage program combines
                      satisfying staples with imaginative twists. From boozy
                      drag show brunches, classic Americana breakfasts, special
                      occasions and everything in between, The OG has something
                      for everyone.
                    </p>
                  </div>
                  <div className="navigate-menu">
                    <Link to="/menu">
                      <button className="menu-link-btn">View Menu</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section id="services">
          <div className="services-container center flex-column">
            <div className="services-heading py-4 my-2">
              <h1
                className="heading text-light"
                style={{ borderBottom: "4px solid white" }}
              >
                Our Services
              </h1>
            </div>
            <ServicesCard services={ServicesList} />
          </div>
        </section>

        <hr />

        <section id="best-dishes" className="center">
          <div className="best-dishes-container center flex-column pb-4">
            <div className="serices-heading py-4 my-2">
              <h1
                className="heading"
                style={{
                  borderBottom: "4px solid var(--materialRed)",
                  color: "var(--materialRed)",
                }}
              >
                Best Dishes
              </h1>
            </div>
            <BestDishesCard bestDishes={BestDishesList} />
          </div>
        </section>

        <hr />

        <section id="quote" className="center">
          <div className="quote-container">
            <div className="quote-row">
              <div className="quote-col center flex-column">
                <div className="content" style={{ width: "70%" }}>
                  <div className="quote-heading">
                    <h4 className="pt-4 d-flex align-items-center">
                      <div className="text-white">Some Words of</div>
                      <div
                        className="px-2"
                        style={{ color: "#ffff" }}
                      >
                        Satisfaction
                      </div>
                    </h4>
                  </div>
                  <div className="quote-line text-white">
                    <p className="pt-2">
                      To achieve this, it would be necessary to have uniform
                      grammar. pronunciation and more common words.
                    </p>
                  </div>

                  <div className="saying pt-3 text-light">
                    <p className="pt-4">
                      I am so happy, my dear friend, so absorbed in the
                      exquisite sense of mere tranquil existence, that neglect
                      my talents. To achieve this, it would be necessary to have
                      uniform grammar words it is a paradisematic country, in
                      which roasted parts of sentences fly into your mouth...
                    </p>
                  </div>

                  <p className="pt-2 text-light text-uppercase fw-100">
                    - Mr. Amit Chaturvedi
                  </p>
                </div>
              </div>
              <div className="quote-col">
                <div className="person-img">
                  <img
                    src={quoteMan}
                    alt="Mr. Amit Chaturvedi"
                    style={{ width: "65%", display: "block", margin: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
