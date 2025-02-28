import React from 'react';
import { FaGlobe, FaTags, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import './WhyBookTour.css';

const WhyBookTour = () => {
  return (
    <section className="why-book-tour">
      <h2>Why Book Your Tour</h2>
      <p className="description">
        Discover the world with ease and confidence. Our expertly crafted tours ensure unforgettable
        experiences, seamless planning, and exceptional service. Let us take care of the details
        while you focus on creating lifelong memories.
      </p>

      <div className="features">
        <div className="feature">
          <FaGlobe className="icon" />
          <h3>Worldwide Coverage</h3>
          <p>Explore destinations across the globe with our extensive network of tours and travel options.</p>
        </div>
        <div className="feature">
          <FaTags className="icon" />
          <h3>Competitive Pricing</h3>
          <p>Enjoy high-quality travel experiences without breaking the bank. We offer the best value for your money.</p>
        </div>
        <div className="feature">
          <FaCalendarAlt className="icon" />
          <h3>Fast Booking</h3>
          <p>Book your dream vacation in just a few clicks. Our streamlined process ensures a hassle-free experience.</p>
        </div>
        <div className="feature">
          <FaHeadset className="icon" />
          <h3>Best Support 24/7</h3>
          <p>Travel with peace of mind knowing our dedicated support team is available around the clock.</p>
        </div>
      </div>

      <div className="experience">
        <h3 className="experience-title">We Are The Best For Providing The Travel Arrangement.</h3>
        <p>
          We pride ourselves on delivering exceptional travel experiences tailored to your needs.
          With years of expertise, we ensure every detail is taken care of, so you can focus on
          enjoying your journey to the fullest.
        </p>

        <div className="stats">
          <div>
            <h4>60K+</h4>
            <p>Happy Travelers</p>
          </div>
          <div>
            <h4>6K+</h4>
            <p>Tours Success</p>
          </div>
          <div>
            <h4>95%</h4>
            <p>Positive Reviews</p>
          </div>
        </div>

        <p className="rating">
          Excellent! <span>5.0</span> Rating out of 5.0 based on <a href="#">245,354 reviews</a>
        </p>
      </div>
    </section>
  );
};

export default WhyBookTour;