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
      <div className="Text_01">
        <h2>
          What We <span>Offering</span>
        </h2>
      </div>

      <div className="offers-container">
        <button className="scroll-btn left-btn" onClick={scrollLeft}>
          &#8592;
        </button>
        <div id="scroll-container" className="scrollable">
          <div className="offer-card">
            <img src="../../public/photos/cultural.jpg" alt="Cultural Tours" />

            <h3>Cultural Tours</h3>
          </div>
          <div className="offer-card">
            <img src="../../public/photos/wildlife.jpg" alt="Wildlife & Safari" />

            <h3>Wildlife & Safari</h3>
          </div>
          <div className="offer-card">
            <img src="../../public/photos/history.jpg" alt="Historical Tours" />

            <h3>Historical Tours</h3>
          </div>
          <div className="offer-card">
            <img src="../../public/photos/LuxuryTours.jpg" alt="Luxury Tours" />


            <h3>Luxury Tours</h3>
          </div>
          <div className="offer-card">
            <img src="../../public/photos/adventure.jpg" alt="Luxury Tours" />

            <h3>Adventure Tours</h3>
          </div>
        </div>
        <button className="scroll-btn right-btn" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Offers;
