import React from 'react';
import BackgroundVideo from './video1.mp4';
import './home.css';

function Home() {
  return (
    <>
      
      <div className="video-container">
        <video autoPlay muted loop id="Vedio_01">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>

      
      <div className="search-bar">
        <div className="search-tabs">
          <button>Tour</button>
          <button>Hotel</button>
          <button>Visa</button>
          <button>Activities</button>
          <button>Transport</button>
        </div>
        <div className="search-options">
          <div className="option">
            <label>Destination</label>
            <select>
              <option>Afghanistan</option>
              <option>India</option>
              <option>Sri Lanka</option>
            </select>
          </div>
          <div className="option">
            <label>Tour Type</label>
            <select>
              <option>Family Tour</option>
              <option>Adventure</option>
              <option>Luxury</option>
            </select>
          </div>
          <div className="option">
            <label>When</label>
            <select>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
            </select>
          </div>
          <div className="option">
            <label>Tour Category</label>
            <select>
              <option>Economy</option>
              <option>Standard</option>
              <option>Luxury</option>
            </select>
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
}

export default Home;
