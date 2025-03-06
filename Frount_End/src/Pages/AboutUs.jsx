// AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import { FaGlobeAmericas, FaHandsHelping, FaAward } from 'react-icons/fa';
import team1 from '../../public/photos/history.jpg';
import team2 from '../../public/photos/history.jpg';
import team3 from '../../public/photos/history.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Our Journey Begins With Your Dreams</h1>
          <p>Creating unforgettable travel experiences since 2010</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p className="highlight-text">
            Founded in the heart of wanderlust, TripRex emerged from a simple idea:
            to make world-class travel accessible to everyone.
          </p>
          <div className="story-grid">
            <div className="story-text">
              <p>
                What started as a small team of passionate travelers has grown into
                a global community of explorers. We've spent the last decade
                perfecting the art of travel, combining local expertise with
                cutting-edge technology to create seamless experiences.
              </p>
            </div>
            <div className="story-image"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="our-values">
        <h2>Why Choose TripRex</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaGlobeAmericas className="value-icon" />
            <h3>Global Expertise</h3>
            <p>150+ destinations with local specialist guides</p>
          </div>
          <div className="value-card">
            <FaHandsHelping className="value-icon" />
            <h3>Personalized Service</h3>
            <p>24/7 support tailored to your needs</p>
          </div>
          <div className="value-card">
            <FaAward className="value-icon" />
            <h3>Award Winning</h3>
            <p>Recognized by National Travel Awards 2023</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Travel Architects</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={team1} alt="Team Member" />
            <h3>Sarah Johnson</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={team2} alt="Team Member" />
            <h3>Michael Chen</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src={team3} alt="Team Member" />
            <h3>Emma Wilson</h3>
            <p>Travel Experience Designer</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Adventure?</h2>
          <button className="cta-button">Plan Your Journey</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;