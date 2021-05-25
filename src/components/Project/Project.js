import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import { Link } from "react-router-dom";
import logo from "../../assets/logoo.svg";
function Project() {
  return (
    <>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <Header />
      <div className="container">
        <div className="project-container">
          <h2>Projects</h2>
          <div className="project">
            <h3>Lekki Store</h3>
            <div className="summary">
              <p>
                This is an ecommerce site. Front end was made with React and
                styling was achieved with styled components. The backend was
                done with Node on the express framework, Postgres was the
                database of choice and ORM used is Sequelize. I used JWT for
                user authentication, and bcrypt was used for password hashing.
                The user can create an account, login and place an order. The
                user can also view all previous orders.
              </p>
            </div>
            <ul className="tech-stack">
              <li>React</li>
              <li>Express</li>
              <li>Postgres</li>
              <li>Styled Components</li>
            </ul>
            <div className="buttons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://lekki-store.netlify.app/"
                className="live-link"
              >
                Live Link
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Placeholder30/lekki-project"
                className="github"
              >
                github
              </a>
            </div>
          </div>

          <div className="project">
            <h3>Social Media feed</h3>
            <div className="summary">
              <p>
                This is a social media feed, one of the first projects I made. I
                got to practice CSS grid and Flexbox, I also used JavaScript to
                enable the light and dark mode toggle functionality.
              </p>
            </div>
            <ul className="tech-stack">
              <li>Html</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="buttons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://placeholder30.github.io/social-media-feed/"
                className="live-link"
              >
                Live Link
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Placeholder30/social-media-feed"
                className="github"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
