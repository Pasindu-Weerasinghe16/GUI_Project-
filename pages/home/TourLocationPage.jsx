import React, { useState, useEffect } from 'react';
import './TourLocationPage.css';
import history from './../../public/photos/history.jpg';

function TourLocationPage() {
  const tours = [
    {
      image: history,
      destination: 'Indonesia',
      duration: '18 Tours Available',
      description: 'Explore the vibrant culture and stunning landscapes of Indonesia.',
    },
    {
      image: history,
      destination: 'Egypt',
      duration: '18 Tours Available',
      description: 'Discover the ancient wonders and rich history of Egypt.',
    },
    {
      image: history,
      destination: 'Switzerland',
      duration: '10 Tours Available',
      description: 'Experience the breathtaking beauty of the Swiss Alps.',
    },

  ];

  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    setIsCardVisible(true);
  }, []);

  return (
    <div className="leading-tour-location">
      <div className="section-header">
        <h2 className="section-title">
          Leading <span>Tour Locations</span>
        </h2>
        <p className="section-subtitle">
          Discover the world's most captivating destinations with our expertly curated tours.
        </p>
      </div>

      <button className="all-destination">Explore All Destinations →</button>

      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div
            className={`tour-card ${isCardVisible ? 'visible' : ''}`}
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="card-image">
              <img src={tour.image} alt={tour.destination} />
              <div className="card-overlay"></div>
            </div>
            <div className="tour-details">
              <span className="duration">{tour.duration}</span>
              <h3>{tour.destination}</h3>
              <p>{tour.description}</p>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourLocationPage;