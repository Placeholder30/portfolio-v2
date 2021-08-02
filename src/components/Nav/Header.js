import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <a
        href="https://drive.google.com/file/d/1-pRANyGH4fmnRsM4Jn_iRH0zlyhMeME1/view?usp=sharing"
        className="top-left link"
      >
        Resume
      </a>
      <Link to="/projects" className="top-right link">
        Projects
      </Link>
    </nav>
  );
}

export default Header;
