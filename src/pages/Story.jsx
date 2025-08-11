import React from "react";
import { motion } from "framer-motion";

import CrewMemberCard from "../components/CrewMemberCard";
import CrewMembersList from "../assets/api/CrewMembersList";
import {
  lazyContainer,
  smoothFade,
  fadeFromLeft,
  fadeFromRight,
} from "../ui/animation";

const Story = () => {
  return (
    <main className="main w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero h-[65vh] bg-neutral-950 flex items-center justify-center">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="story-heading" variants={smoothFade}>
            <h1 className="heading cursive-text text-center text-4xl sm:text-5xl text-orange-500">
              Our Story
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* About Menu Section */}
      <section className="about-menu">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-4">
            <motion.div className="about-menu-cols" variants={fadeFromLeft}>
              <div className="menu-img">
                <img
                  src={"/images/story-menu-intro.jpg"}
                  className="mx-auto w-full lg:w-auto rounded"
                  alt="celebrating"
                />
              </div>
            </motion.div>

            <motion.div className="about-menu-cols" variants={fadeFromRight}>
              <div className="menu-content">
                <div className="title">
                  <h3 className="title text-3xl cursive-text font-bold text-orange-500">
                    Our Menu
                  </h3>
                </div>
                <div className="menu-description">
                  <p className="py-4">
                    Our menus feature familiar, elevated comforts including a
                    variety of gourmet sandwiches, soups, and all-day breakfast
                    options alongside our eclectic take on classic brunch
                    favorites like our Smothered Breakfast Burrito, Steak &
                    Eggs, and Brioche French Toast.
                  </p>
                  <p className="py-4">
                    Adding to the flavor journey, we bring you a taste of India
                    with crispy stuffed parathas, fluffy masala dosas, spicy pav
                    bhaji, and tangy chaat platters bursting with bold, aromatic
                    spices. Our signature masala chai and refreshing sweet lassi
                    perfectly complement these vibrant dishes.
                  </p>
                  <p>
                    Unique and craveable curiosities include our signature
                    Doughnut Slider Burger, a quirky collection of boozy
                    milkshakes, and a pie case offering a rotating selection of
                    sweet treats — all served with a dash of creativity to
                    brighten your day.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="experience bg-neutral-950">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="experience-row grid grid-cols-1 lg:grid-cols-2 gap-4">
            <motion.div className="experience-col space-y-6" variants={fadeFromLeft}>
              <div className="experience-title">
                <h3 className="title text-3xl cursive-text font-bold text-orange-500">
                  Nashto Club Experience
                </h3>
              </div>
              <div className="content text-white">
                <p>
                  Nestled in the heart of Kharar, just steps away from the
                  lively streets of Mohali, NashtoClub is where mornings come
                  alive with the aroma of freshly ground spices and sizzling
                  tavas. We offer a breakfast and brunch experience for both the
                  young and young at heart, with vibrant themes, festive
                  specials, and a warm touch of Indian hospitality.
                </p>
                <p className="py-3">
                  Our colorful interiors, inspired by the hues of Indian
                  markets, lead you to a cozy outdoor seating area — the perfect
                  spot to sip on hot masala chai or enjoy a plate of buttery
                  parathas while soaking in the lively neighborhood buzz.
                </p>
                <p>
                  Come take a bite out of Nashto — where every morning starts
                  with flavor and a smile. We’ll see you soon!
                </p>
              </div>
            </motion.div>

            <motion.div className="experience-col center flex-column" variants={fadeFromRight}>
              <div className="story-img">
                <img
                  src={"/images/experience-intro-bg.jpg"}
                  className="mx-auto w-full lg:w-auto rounded"
                  alt="experience image"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Crew Section */}
      <section id="crew">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={lazyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="crew-content space-y-10" variants={smoothFade}>
            <div className="crew-heading">
              <h2 className="title text-4xl text-center cursive-text font-bold text-orange-500">
                Our Crew
              </h2>
            </div>
            <div className="crew-card-container py-4">
              <CrewMemberCard crewList={CrewMembersList} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Lines Section */}
      <section className="lines bg-neutral-950">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={smoothFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-orange-500 text-xl">
            The Nashto Club -- reinvents the neighborhood brunch-ery, combining
            timeless inspiration from classic Indian with inventive and playful
            modern flair. With influences ranging from the 2000 diner to the
            elegant railway dining cars of days past, you'll find a nostalgic
            collection of comforts, classics and curiosities with a modern
            twist.
          </p>
        </motion.div>
      </section>

      {/* Collaborations Section */}
      <section id="collabs">
        <motion.div
          className="container max-w-7xl mx-auto px-6 py-24"
          variants={smoothFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="collabs-content space-y-10">
            <div className="crew-heading">
              <h2 className="title text-3xl cursive-text text-center font-bold text-orange-500">
                Our Collaborations
              </h2>
            </div>
            <div className="collabs-brands flex flex-wrap items-center justify-center gap-4">
              <div className="collabs-col">
                <img
                  src={"/images/Zomato_logo.png"}
                  alt="Zomato_Logo"
                  className="w-24"
                />
              </div>
              <div className="collabs-col">
                <img
                  src={"/images/Swiggy_logo.png"}
                  alt="Swiggy_Logo"
                  className="w-24"
                />
              </div>
              <div className="collabs-col">
                <img
                  src={"/images/UberEats_logo.png"}
                  alt="UberEats_Logo"
                  className="w-24"
                />
              </div>
              <div className="collabs-col">
                <img
                  src={"/images/Dominos_logo.png"}
                  alt="Dominos_Logo"
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Story;
