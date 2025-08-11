import React from "react";
import { motion } from "framer-motion";
import ServicesList from "../assets/api/ServicesList";
import ServicesCard from "../components/ServicesCard";
import BestDishesCard from "../components/BestDishesCard";
import BestDishesList from "../assets/api/BestDishesList";
import { Link } from "react-router-dom";
import {
  fadeFromLeft,
  fadeFromRight,
  lazyContainer,
  smoothFade,
} from "../ui/animation";

const Home = (props) => {
  return (
    <main className="main w-full overflow-x-hidden">
      {/* Hero */}
      <section
        id="home-intro"
        className="min-h-fit lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-900"
      >
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24 space-y-6"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="content grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10"
            variants={lazyContainer}
          >
            <motion.div className="left p-6" variants={fadeFromLeft}>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900">
                <span className="cursive-text text-orange-600">
                  Spicing Up Your Mornings
                </span>
              </h1>
              <p className="max-w-2xl pt-4 sm:text-lg text-neutral-300">
                From the earthy warmth of masala chai to the zest of freshly
                ground spices in every bite,
                <span className="font-semibold text-orange-600 mx-2">
                  NashtoClub
                </span>
                serves breakfast that wakes up your senses — the Indian way.
              </p>

              <div className="mt-8 flex items-center flex-col sm:flex-row gap-4">
                <motion.button
                  id="reservation-btn"
                  onClick={props.openWidget}
                  className="w-full sm:max-w-fit px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-medium 
                   hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reservations
                </motion.button>
                <Link
                  to="/menu"
                  id="menu-btn"
                  className="w-full sm:max-w-fit text-center px-6 py-3 rounded-full bg-orange-500 text-white font-medium border-2 border-orange-500 
                   hover:bg-transparent hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Menu
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div className="right" variants={fadeFromRight}>
              <img
                src="/images/hero-image.png"
                className="mx-auto lg:w-full"
                alt="Hero"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about-menu" className="about">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lazyContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div className="about-menu-cols" variants={fadeFromLeft}>
              <div className="menu-img">
                <img
                  src={"/images/home-menu.png"}
                  className="rounded-full mx-auto w-full"
                  alt="food"
                />
              </div>
            </motion.div>
            <motion.div className="about-menu-cols p-6" variants={fadeFromRight}>
              <div className="menu-content">
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                  Our Menu
                </h2>
                <p className="text-lg pb-3 text-orange-600 cursive-text">
                  "A Feast for Every Morning"
                </p>
                <p className="max-w-3xl pb-3 sm:text-lg text-neutral-600">
                  Discover the magic of breakfast at
                  <span className="font-semibold text-orange-600 px-1">
                    NashtoClub
                  </span>
                  — where every dish is a blend of bold Indian spices, fresh
                  ingredients, and a dash of creativity.
                </p>
                <p className="max-w-3xl text-base sm:text-lg text-neutral-600">
                  Whether you crave something hearty, light, or sweet, you’ll
                  find a flavor to fall in love with.
                </p>
                <Link to="/menu">
                  <motion.button
                    className="menu-link-btn bg-orange-500 mt-4 py-3 px-5 rounded text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Menu
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="services bg-neutral-950">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lazyContainer}
        >
          <motion.div
            className="contenent mx-auto space-y-10"
            variants={lazyContainer}
          >
            <motion.div className="services-heading" variants={smoothFade}>
              <h1 className="heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
                Our Services
              </h1>
            </motion.div>
            <motion.div variants={smoothFade}>
              <ServicesCard services={ServicesList} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Best Dishes */}
      <section id="best-dishes" className="center">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24 space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lazyContainer}
        >
          <motion.div className="serices-heading" variants={smoothFade}>
            <h1 className="heading text-center cursive-text text-orange-500 font-bold text-3xl sm:text-4xl">
              Best Dishes
            </h1>
          </motion.div>
          <motion.div variants={smoothFade}>
            <BestDishesCard bestDishes={BestDishesList} />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section id="quote-section" className="bg-neutral-950">
        <motion.div
          className="container max-w-7xl items-center mx-auto px-6 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lazyContainer}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 items-center gap-10"
            variants={smoothFade}
          >
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
              <p className="pt-2 text-orange-500">- Mr. Amit Chaturvedi</p>
            </div>

            <div className="person-img">
              <img
                src={"/images/quote-man.jpg"}
                alt="Mr. Amit Chaturvedi"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
