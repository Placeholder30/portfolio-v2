import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <a
        href="https://drive.google.com/file/d/1MR3bycj5KkhuTm6lmwvNv9yk0q4r9Q6w/view?usp=sharing"
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
