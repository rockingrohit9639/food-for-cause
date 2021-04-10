import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <input type="text" />
      </div>
      <div className="navbar__logo">
        <h2 className="font-bold"> Food For Cause <span>.</span>
        </h2>
      </div>
      <div className="navbar__right">
        <Link to="#"> AboutUs </Link>
        <Link to="#"> SignIn </Link>
        <Link to="#"> Donate </Link>
      </div>
    </nav>
  );
}

export default Navbar;
