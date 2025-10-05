import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Anonime</div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>List anime</li>
      </ul>
      <div className="navbar-actions">
        <input type="text" placeholder="Search anime or movie" />
      </div>
    </nav>
  );
}

export default Navbar;
