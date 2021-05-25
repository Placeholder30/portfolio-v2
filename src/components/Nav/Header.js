import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <a href="mailto:malikoabdulaziz@gmail.com" className="top-left link">
        Contact
      </a>
      <Link to="/projects" className="top-right link">
        Projects
      </Link>
    </nav>
  );
}

export default Header;
