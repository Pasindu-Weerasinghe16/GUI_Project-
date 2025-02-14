import React from "react";
import "./navbar.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>

      <body>

        <header className="navbar">

          <div className="logo">

            <span className="logo-text">TripRex</span>

          </div>

          <div className="navbar-right">

            <ul className="navbar-menu">
              <a href="/"><li>Home</li></a>
              <li>Contact</li>


              <li className="dropdown"><a href="#">Destination <RiArrowDropDownLine /> </a>
                <ul className="dropdown-menu">
                  <li><a href="./CountryDiscription">France</a></li>
                  <li><a href="/CountryDiscription_SriLanka">Sri Lanka</a></li>
                  <li><a href="#">Countery-03</a></li>
                  <li><a href="#">Countery-04</a></li>
                </ul>
              </li>


              <li className="dropdown"><a href="#">Packages <RiArrowDropDownLine /> </a>
                <ul className="dropdown-menu">
                  <li><a href="./packages">Countery-01</a></li>
                  <li><a href="/PackageCard">Countery-02</a></li>
                  <li><a href="#">Countery-03</a></li>
                  <li><a href="#">Countery-04</a></li>
                </ul>
              </li>

              <li><Link to="/cart">About</Link></li>

            </ul>


          </div>
          <div className="navbar-right1" >

            <a href="/SignIn"><button className="button_01" >Sign In</button></a>
            <a href="/SignUp"><button className="button_01">Sign Up</button></a>

          </div>

        </header>



      </body>



    </>

  );
};

export default Navbar;