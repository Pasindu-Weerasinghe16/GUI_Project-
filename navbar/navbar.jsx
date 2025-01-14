import React from "react";
import "./navbar.css"
import { RiArrowDropDownLine } from "react-icons/ri";

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

              <li>Destination</li>
              <li className="dropdown"><a href="#">Packages <RiArrowDropDownLine /> </a>
                <ul className="dropdown-menu">
                  <li><a href="./packages">Countery-01</a></li>
                  <li><a href="/PackageCard">Countery-02</a></li>
                  <li><a href="#">Countery-03</a></li>
                  <li><a href="#">Countery-04</a></li>
                </ul>
              </li>

              <li>About</li>

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