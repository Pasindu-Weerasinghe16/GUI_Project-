import React, { useState, useEffect } from 'react';
import './TourLocationPage.css';
import history from './../../public/photos/history.jpg'

function TourLocationPage() {
  const tours = [
    {
      image: history, 
      destination: 'Indonesia',
      duration: '18 Tour'
    },
    {
      image: history,
      destination: 'Egypt',
      duration: '18 Tour'
    },
    {
      image: history,
      destination: 'Switzerland',
      duration: '10 Tour'
    },
    {
      image: history,
      destination: 'Bangladesh',
      duration: '10 Tour'
    }
  ];

  
  const [isCardVisible, setIsCardVisible] = useState(false);

  
  useEffect(() => {
    setIsCardVisible(true);
  }, []);

  return (
    <div className="leading-tour-location">
      <h2>Leading Tour Location</h2>
      <button className="all-destination">All Destination →</button>

      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div
            className={`tour-card ${isCardVisible ? 'visible' : ''}`}
            key={index}
          >
            <img src={tour.image} alt={tour.destination} />
            <div className="tour-details">
              <span className="duration">{tour.duration}</span>
              <h3>{tour.destination}</h3>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourLocationPage;