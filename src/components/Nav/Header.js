import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <a
        href="https://drive.google.com/file/d/18sAR1plnvouxt7FDTcbyYPhZ7icyE8Rc/view?usp=sharing"
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
