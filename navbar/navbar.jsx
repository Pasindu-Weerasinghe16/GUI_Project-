import React from "react";
import "./navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-text">TripRex</span>
      </div>

      <div className="navbar-right">
        <ul className="navbar-menu">

          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>


          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>

          <li className="dropdown nav-item">
            <span className="nav-link">Destination <RiArrowDropDownLine /></span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/CountryDiscription" className="dropdown-link">France</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/CountryDiscription_SriLanka" className="dropdown-link">Sri Lanka</Link>
              </li>
              <li className="dropdown-item">
                <Link to="#" className="dropdown-link">Country-03</Link>
              </li>
              <li className="dropdown-item">
                <Link to="#" className="dropdown-link">Country-04</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown nav-item">
            <span className="nav-link">Packages <RiArrowDropDownLine /></span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/packages" className="dropdown-link">Country-01</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/PackageCard" className="dropdown-link">Country-02</Link>
              </li>
              <li className="dropdown-item">
                <Link to="#" className="dropdown-link">Country-03</Link>
              </li>
              <li className="dropdown-item">
                <Link to="#" className="dropdown-link">Country-04</Link>
              </li>
            </ul>
          </li>


          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>


      <div className="navbar-right1">
        <Link to="/SignIn" className="button_01">Sign In</Link>
        <Link to="/SignUp" className="button_01">Sign Up</Link>
      </div>
    </header>
  );
};

export default Navbar;