import React from "react";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
function Socials() {
  return (
    <div className="contact">
      <ul className="socials">
        <li>
          <a href="https://github.com/Placeholder30">
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/placeholder30">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/abdulaziz-malik-o">
            <img src={linkedin} alt="linkein" />
          </a>
        </li>
        <li>
          <a href="mailto:malikoabdulaziz@gmail.com">
            <img src={email} alt="email" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
