import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <Link to="/interest" className="bottom-left link">
        Interest
      </Link>
      <Link to="/about" className="bottom-right link">
        About
      </Link>
    </footer>
  );
}

export default Footer;
