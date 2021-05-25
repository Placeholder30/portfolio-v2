import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import { Link } from "react-router-dom";
import logo from "../../assets/logoo.svg";
function Interest() {
  return (
    <>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <Header />
      <div className="container">
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
              I'm currently Working on a flappy bird clone with vanilla JS check
              it out
              <strong>
                {" "}
                <a href="https://github.com/Placeholder30/flappy-fish">
                  <u>here</u>
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Interest;
