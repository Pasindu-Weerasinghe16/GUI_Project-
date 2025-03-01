import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCcVisa, FaStripe, FaPaypal, FaCcMastercard, FaCcAmex, FaInfoCircle, FaSuitcase, FaUser, FaNewspaper, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">TripRex</h2>
          <p className="footer-tagline">Explore the World with Confidence</p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#"><FaInfoCircle className="link-icon" /> About Us</a></li>
            <li><a href="#"><FaMapMarkerAlt className="link-icon" /> Destinations</a></li>
            <li><a href="#"><FaSuitcase className="link-icon" /> Packages</a></li>
            <li><a href="#"><FaUser className="link-icon" /> Guides</a></li>
            <li><a href="#"><FaNewspaper className="link-icon" /> Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <p><FaPhone className="contact-icon" /> +999-858 624 984</p>
            <p><FaEnvelope className="contact-icon" /> info@triprex.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> 168/170, Avenue 01<br />Mirpur DOHS, Dhaka</p>
          </div>
        </div>


        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="payment-methods">
            <FaCcVisa className="payment-icon" />
            <FaStripe className="payment-icon" />
            <FaPaypal className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <FaCcAmex className="payment-icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
        <p className="copyright">© 2023 TripRex. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;