import React from "react";
import "./navbar.css"

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
              <li>Pages</li>
              <li>Destination</li>
              <a href="/packages"><li>Packages</li></a>
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