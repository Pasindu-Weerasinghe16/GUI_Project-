import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">GoTrip</a>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/pages">Pages</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="nav-actions">


                <button className="btn-signin">Sign In / Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
