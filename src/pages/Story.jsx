import React from "react";
import menuIntroImg from "/images/story-menu-intro.jpg";
import expIntroBg from "/images/experience-intro-bg.jpg";
import CrewMemberCard from "../components/CrewMemberCard";
import CrewMembersList from "../assets/api/CrewMembersList";
import Zomato_Logo from "/images/Zomato_logo.png";
import Swiggy_Logo from "/images/Swiggy_logo.png";
import UberEats_Logo from "/images/UberEats_logo.png";
import Dominos_Logo from "/images/Dominos_logo.png";
const Story = () => {
  return (
    <main>
      <section className="hero h-[65vh] bg-neutral-950 flex items-center justify-center">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="story-heading">
            <h1 className="heading cursive-text text-center text-4xl sm:text-5xl text-orange-500">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      <section className="about-menu">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="about-menu-cols">
              <div className="menu-img">
                <img
                  src={menuIntroImg}
                  className="mx-auto w-full lg:w-auto rounded"
                  alt="celebrating"
                />
              </div>
            </div>
            <div className="about-menu-cols">
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
            </div>
          </div>
        </div>
      </section>

      <section className="experience bg-neutral-950">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="experience-row grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="experience-col space-y-6">
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
            </div>
            <div className="experience-col center flex-column">
              <div className="story-img">
                <img
                  src={expIntroBg}
                  className="mx-auto w-full lg:w-auto rounded"
                  alt="experience image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crew">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="crew-content space-y-10">
            <div className="crew-heading">
              <h2 className="title text-4xl text-center cursive-text font-bold text-orange-500">
                Our Crew
              </h2>
            </div>
            <div className="crew-card-container py-4">
              <CrewMemberCard crewList={CrewMembersList} />
            </div>
          </div>
        </div>
      </section>

      <section className="lines bg-neutral-950">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <p className="text-orange-500 text-xl">
            The Nashto Club -- reinvents the neighborhood brunch-ery, combining
            timeless inspiration from classic Indian with inventive and playful
            modern flair. With influences ranging from the 2000 diner to the
            elegant railway dining cars of days past, you'll find a nostalgic
            collection of comforts, classics and curiosities with a modern
            twist.
          </p>
        </div>
      </section>

      <section id="collabs">
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="collabs-content space-y-10">
            <div className="crew-heading">
              <h2 className="title text-3xl cursive-text text-center font-bold text-orange-500">
                Our Collaborations
              </h2>
            </div>
            <div className="collabs-brands flex flex-wrap items-center justify-center gap-4">
              <div className="collabs-col">
                <img src={Zomato_Logo} alt="Zomato_Logo" className="w-24" />
              </div>
              <div className="collabs-col">
                <img src={Swiggy_Logo} alt="Swiggy_Logo" className="w-24" />
              </div>
              <div className="collabs-col">
                <img src={UberEats_Logo} alt="UberEats_Logo" className="w-24" />
              </div>
              <div className="collabs-col">
                <img src={Dominos_Logo} alt="Dominos_Logo" className="w-24" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Story;
