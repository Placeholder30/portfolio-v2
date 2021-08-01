import React from "react";
import Footer from "../Nav/Footer";
import Header from "../Nav/Header";
import Socials from "../Socials/Socials";
import HomeIcon from "../HomeIcon";
import Card from "./Card";
function Project() {
  return (
    <>
      <Header />
      <div className="container">
        <HomeIcon />
        <div className="project-container">
          <h2>Projects</h2>

          <Card
            title="Lekki Store"
            summary={lekkiStoreSummary}
            stack={lekkiStoreStack}
            github={"https://github.com/Placeholder30/lekki-project"}
            liveLink={"https://lekki-store.netlify.app/"}
          />

          <Card
            title="Trimmer"
            summary={trimmerSummary}
            stack={trimmerStack}
            github="https://github.com/Placeholder30/url-shortner-frontend-min"
            liveLink="https://trimmer.netlify.app"
          />

          <Card
            title="Social Media Feed"
            summary={socialMediaFeedSummary}
            stack={socialMediaFeedStack}
            github="https://github.com/Placeholder30/social-media-feed"
            liveLink="https://placeholder30.github.io/social-media-feed/"
          />
        </div>
        <Socials />
      </div>
      <Footer />
    </>
  );
}

export default Project;

const lekkiStoreSummary = `This is an ecommerce site. Front end was made with React and
styling was achieved with styled components. The backend was
done with Node on the express framework, Postgres was the
database of choice and ORM used is Sequelize. I used JWT for
user authentication, and bcrypt was used for password hashing.
The user can create an account, login and place an order. The
user can also view all previous orders`;
const lekkiStoreStack = ["React", "Express", "Postgres", "Styled Components"];

const trimmerSummary = ` A url shortener app built, Enter you long url and get a shortened one returned`;
const trimmerStack = ["React", "NodeJS", "Redis"];

const socialMediaFeedSummary = `This is a social media feed, one of the first projects I made. I
got to practice CSS grid and Flexbox, I also used JavaScript to
enable the light and dark mode toggle functionality, and leveraged the cascade to enable darkmode styles`;

const socialMediaFeedStack = ["Html", "CSS", "JavaScript"];
