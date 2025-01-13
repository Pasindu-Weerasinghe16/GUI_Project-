import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCcVisa, FaStripe, FaPaypal, FaCcMastercard, FaCcAmex, FaInfoCircle, FaSuitcase, FaUser, FaNewspaper } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">TripRex</h2>
          <p className="footer-title">Want to Take</p>
          <p className="footer-subtitle">Tour Packages?</p>
          <button className="footer-button">Book A Tour</button>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Link</h3>
          <ul className="footer-links">
            <li><a href="#"><FaInfoCircle /> About Us</a></li>
            <li><a href="#"><FaMapMarkerAlt /> Destinations</a></li>
            <li><a href="#"><FaSuitcase /> Tour Package</a></li>
            <li><a href="#"><FaUser /> Tour Guide</a></li>
            <li><a href="#"><FaNewspaper /> Article</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">More Inquiry</h3>
          <p><FaPhone /> +999-858 624 984</p>
          <p><FaEnvelope /> info@example.com</p>
          <h3 className="footer-heading">Address</h3>
          <p><FaMapMarkerAlt /> House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">We Are Here</h3>
          <p>Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol id nibhom condimentum.</p>
          <h3 className="footer-heading">Payment Partner</h3>
          <div className="payment-icons">
            <FaCcVisa />
            <FaStripe />
            <FaPaypal />
            <FaCcMastercard />
            <FaCcAmex />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©Copyright 2023 TripRex | Design By Egens Lab</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Condition</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
