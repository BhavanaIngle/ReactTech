import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/work">Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/publications">Publications</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
