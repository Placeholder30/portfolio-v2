import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import Socials from "../Socials/Socials";
import HomeIcon from "../HomeIcon";
function About() {
  return (
    <>
      <Header />
      <div className="container">
        <HomeIcon />
        <div className="about-container" id="about">
          <div className="about-inner">
            <h2>About Me!</h2>
            <p>
              My name is Malik Abdulaziz, and I like building responsive web
              applications using JavaScript.
            </p>
            <p>
              I call myself a NodeJS fanboy when no one is looking, and I have
              an interesting relationship with CSS. This means I know how to
              write it, but I don't enjoy writing it.
            </p>
            <p>
              What I do like to write are APIs and server side logic in general.
              But I am no slouch on the Frontend, that I primarily like to write
              with React. I think single page applications are the best things
              since sliced bread, and I also dabble with vanilla JS.
            </p>
            <p>
              I currently work as a Quantity Surveyor, and I'm trying to pivot
              to web development. Hire Me!
            </p>
          </div>
        </div>
        <Socials />
      </div>
      <Footer />
    </>
  );
}

export default About;
