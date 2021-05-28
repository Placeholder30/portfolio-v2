import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import avatar from "../../assets/avatarr.jpg";
import Socials from "../Socials/Socials";
function HeroSection() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="intro-container">
          <div className="content">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="text">
              <h1>Hi, I am Malik, and I'm a Fullstack Developer.</h1>
              <p>
                I write React on the Frontend, and NodeJS on the backend. Give
                me a design and I will bring it to life.
              </p>
            </div>
          </div>
        </div>
        <Socials />
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;
