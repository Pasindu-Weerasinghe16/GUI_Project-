import React from 'react';
import { FaGlobe, FaTags, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import './WhyBookTour.css'

const WhyBookTour = () => {
  return (
    <section className="why-book-tour">
      <h2>Why Book Your Tour</h2>
      <p className="description">
        Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis 
        and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis.
      </p>

      <div className="features">
        <div className="feature">
          <FaGlobe className="icon" />
          <h3>Worldwide Coverage</h3>
          <p>Curabitur convallis enim at ultricies sagittis.</p>
        </div>
        <div className="feature">
          <FaTags className="icon" />
          <h3>Competitive Pricing</h3>
          <p>Curabitur convallis enim at ultricies sagittis.</p>
        </div>
        <div className="feature">
          <FaCalendarAlt className="icon" />
          <h3>Fast Booking</h3>
          <p>Curabitur convallis enim at ultricies sagittis.</p>
        </div>
        <div className="feature">
          <FaHeadset className="icon" />
          <h3>Best Support 24/7</h3>
          <p>Curabitur convallis enim at ultricies sagittis.</p>
        </div>
      </div>

      <div className="experience">
        <h3 className="experience-title">We Are The Best For Providing The Travel Arrangement.</h3>
        <p>
          Nunc volutpat sagittis cursus. Praesent sed dolor pellentesque, consectetur
          velit sit amet, pharetra ipsum. Fusce eu ultricies tortor.
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
            <h4>60%</h4>
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
