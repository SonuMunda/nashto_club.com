import React from "react";
import "./style/Story.css";
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
    <div className="story-wrapper">
      <section id="story-intro" className="center">
        <div className="story-intro-container container">
          <div className="story-heading">
            <h1 className="heading text-white">Our Story</h1>
          </div>
        </div>
      </section>

      <section id="about-menu">
        <div className="about-menu-container container my-4 py-4">
          <div className="about-menu-row px-2">
            <div className="about-menu-cols">
              <div className="menu-img">
                <img src={menuIntroImg} className="rounded" alt="celebrating" />
              </div>
            </div>
            <div className="about-menu-cols">
              <div className="menu-content">
                <div className="title">
                  <h3 className="title">Our Menu</h3>
                </div>
                <div className="menu-description">
                  <p className="py-4">
                    Our menus feature familiar, elevated comforts including a
                    variety of gourmet sandwiches, soups and all-day breakfast
                    options alongside our eclectic take on classic brunch
                    options like our Smothered Breakfast Burrito, Steak & Eggs
                    and Brioche French Toast.
                  </p>
                  <p>
                    Unique and craveable curiosities include our signature
                    Doughnut Slider Burger, a quirky collection of boozy
                    milkshakes and a pie case offering a rotating selection of
                    sweet treats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="center">
        <div className="experience-container container my-4 py-4">
          <div className="experience-row">
            <div className="experience-col center flex-column">
              <div className="experience-title">
                <h3 className="title">Nashto Club Experience</h3>
              </div>
              <div className="content">
                <p>
                  Located within the Rally Hotel, across 20th Street from Coors
                  Field, we offer a brunching experience for both the young and
                  young at heart, complete with original affairs like themed
                  brunches and our monthly Saturday Serve drag show.
                </p>
                <p className="py-3">
                  Our two-toned Terrazzo floor mirrors the South Platte River as
                  it winds through Denver, leading you through the restaurant to
                  an outdoor patio located within McGregor Square for a front
                  row seat to the bustling plaza and expansive outdoor screen.
                </p>
                <p>Come take a bite out of Nashto -- we'll see you soon!</p>
              </div>
            </div>
            <div className="experience-col center flex-column">
              <div className="story-img">
                <img
                  src={expIntroBg}
                  className="rounded"
                  alt="experience image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crew">
        <div className="crew-container container py-4 mt-4">
          <div className="crew-heading">
            <h2 className="title mt-4">Our Crew</h2>
          </div>
          <div className="crew-card-container py-4">
            <CrewMemberCard crewList={CrewMembersList} />
          </div>
        </div>
      </section>

      <section className="lines">
        <div className="some-lines">
          <p className="text">
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
        <div className="collabs-container mt-4 py-4">
          <div className="crew-heading mb-4">
            <h2 className="title py-4">Our Collaborations</h2>
          </div>

          <div className="collabs-row center">
            <div className="collabs-col">
              <img src={Zomato_Logo} alt="Zomato_Logo" />
            </div>
            <div className="collabs-col">
              <img src={Swiggy_Logo} alt="Swiggy_Logo" />
            </div>
            <div className="collabs-col">
              <img src={UberEats_Logo} alt="UberEats_Logo" />
            </div>
            <div className="collabs-col">
              <img src={Dominos_Logo} alt="Dominos_Logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
