import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import Socials from "../Socials/Socials";
import HomeIcon from "../HomeIcon";
function Interest() {
  return (
    <>
      <Header />
      <div className="container">
      <HomeIcon />
        <div className="interest-container">
          <div className="interest">
            <h2>Interests</h2>
            <p>
              When I am not writing code, I like to watch a good movie or some
              anime. I like to read too, which I do not do enough of these days.
            </p>
            <p>
              I also like to learn about new stuff, and podcasts are my favorite
              medium of consuming new information.
            </p>
            <p>
              I'm currently Working on a Journalling app
              it out {" "}
              <strong>
                <a href="https://github.com/Placeholder30/Jotta">
                  <u>here</u>
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}

export default Interest;
