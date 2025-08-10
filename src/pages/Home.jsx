import React from "react";
import ServicesList from "../assets/api/ServicesList";
import ServicesCard from "../components/ServicesCard";
import BestDishesCard from "../components/BestDishesCard";
import BestDishesList from "../assets/api/BestDishesList";
import quoteMan from "/images/quote-man.jpg";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <main>
      {/* Hero */}
      <section
        id="home-intro"
        className="min-h-fit lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-950"
      >
        <div className="container max-w-7xl mx-auto px-4 py-24  space-y-6">
          <div className="content grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="left">
              {/* Headline */}
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900">
                <span className="cursive-text text-orange-600">
                  Spicing Up Your Mornings
                </span>
              </h1>

              {/* Subline */}
              <p className="max-w-2xl mx-auto pt-4 sm:text-lg text-neutral-300">
                From the earthy warmth of masala chai to the zest of freshly
                ground spices in every bite,
                <span className="font-semibold text-orange-600">
                  NashtoClub
                </span>
                serves breakfast that wakes up your senses — the Indian way.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  id="reservation-btn"
                  onClick={props.openWidget}
                  className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-medium 
                   hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
                >
                  Reservations
                </button>

                <Link
                  to="/menu"
                  id="menu-btn"
                  className="text-center px-6 py-3 rounded-full bg-orange-500 text-white font-medium border-2 border-orange-500 
                   hover:bg-transparent hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  View Our Menu
                </Link>
              </div>
            </div>
            <div className="right">
              <img src="/images/hero-image.png" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about-menu" className="about">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="about-menu-cols">
              <div className="menu-img">
                <img
                  src={"/images/home-menu.png"}
                  className="rounded-full"
                  alt="food image"
                />
              </div>
            </div>
            <div className="about-menu-cols">
              <div className="menu-content">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                  Our Menu
                </h2>

                {/* Tagline */}
                <p className="text-lg pb-3 text-orange-600 cursive-text">
                  "A Feast for Every Morning"
                </p>

                {/* Description */}
                <p className="max-w-3xl mx-auto pb-3 sm:text-lg text-neutral-600">
                  Discover the magic of breakfast at
                  <span className="font-semibold text-orange-600 px-1">
                    NashtoClub
                  </span>
                  — where every dish is a blend of bold Indian spices, fresh
                  ingredients, and a dash of creativity. From crispy parathas
                  and fluffy dosas to aromatic chai and refreshing lassi, our
                  menu is crafted to awaken your senses and brighten your day.
                </p>

                <p className="max-w-3xl mx-auto text-base sm:text-lg text-neutral-600">
                  Whether you crave something hearty, light, or sweet, you’ll
                  find a flavor to fall in love with.
                </p>
                <Link to="/menu">
                  <button className="menu-link-btn bg-orange-500 mt-4 py-3 px-5 rounded text-white">
                    View Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services bg-neutral-950">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="contenent mx-auto space-y-10">
            <div className="services-heading">
              <h1 className="heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
                Our Services
              </h1>
            </div>
            <ServicesCard services={ServicesList} />
          </div>
        </div>
      </section>

      <section id="best-dishes" className="center">
        <div className="container max-w-7xl mx-auto px-4 py-24 space-y-10">
          <div className="serices-heading">
            <h1 className="heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
              Best Dishes
            </h1>
          </div>
          <BestDishesCard bestDishes={BestDishesList} />
        </div>
      </section>

      <section id="quote-section" className="bg-neutral-950">
        <div className="container max-w-7xl items-center mx-auto px-4 py-24">
          <div className="grid  grid-cols-1 md:grid-cols-3 items-center gap-10">
            <div className="content md:col-span-2">
              <div className="quote-heading">
                <h4 className="flex text-xl">
                  <div className="text-white">Some Words of</div>
                  <div className="px-2 text-orange-500 cursive-text">
                    Satisfaction
                  </div>
                </h4>
              </div>
              <div className="quote-line">
                <p className="pt-2 text-white">
                  Every bite at NashtoClub is a journey — rich aromas, bold
                  flavors, and the warmth of a true Indian breakfast experience.
                </p>
              </div>

              <div className="saying pt-3">
                <p className="text-white">
                  From the first sip of masala chai to the last morsel of a
                  buttery paratha, my visit here was nothing short of
                  delightful. The flavors took me back to my childhood, and the
                  hospitality made me feel right at home. NashtoClub isn’t just
                  about food — it’s about starting your day with joy.
                </p>
              </div>

              <p className="pt-2 text-orange-500 text-uppercase fw-500">
                - Mr. Amit Chaturvedi
              </p>
            </div> 

            <div className="person-img">
              <img
                src={quoteMan}
                alt="Mr. Amit Chaturvedi"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
