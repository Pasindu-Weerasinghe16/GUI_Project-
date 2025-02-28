import React from 'react';
import './offers.css';

function Offers() {
  const scrollRight = () => {
    document.getElementById('scroll-container').scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    document.getElementById('scroll-container').scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="offers-section">
      <div className="section-header">
        <h2 className="section-title">
          What We <span>Offering</span>
        </h2>
        <p className="section-subtitle">Explore our curated travel experiences</p>
      </div>

      <div className="offers-container">
        <button className="scroll-btn left-btn" onClick={scrollLeft}>
          <span className="arrow"></span>
        </button>

        <div id="scroll-container" className="scrollable">
          {[
            { title: 'Cultural Tours', image: 'cultural.jpg' },
            { title: 'Wildlife & Safari', image: 'wildlife.jpg' },
            { title: 'Historical Tours', image: 'history.jpg' },
            { title: 'Luxury Tours', image: 'LuxuryTours.jpg' },
            { title: 'Adventure Tours', image: 'adventure.jpg' }
          ].map((offer, index) => (
            <div className="offer-card" key={index}>
              <div className="card-image">
                <img src={`../../public/photos/${offer.image}`} alt={offer.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{offer.title}</h3>
                <button className="explore-btn">Explore Now</button>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right-btn" onClick={scrollRight}>
          <span className="arrow"></span>
        </button>
      </div>
    </div>
  );
}

export default Offers;