import React, { useState, useEffect } from 'react';
import { FiSearch, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';
import './home.css';


const travelPhotos = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
  'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
  'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57',
  '/photos/pic_1.jpg',

  '/photos/pic_3.jpg',
  '/photos/pic_4.jpg',
  '/photos/pic_5.jpg',

  '/photos/pic_7.jpg',
  '/photos/pic_8.jpg',

];

function Home() {
  const [activeService, setActiveService] = useState('hotel');
  const [searchInput, setSearchInput] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % travelPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="slider-container">
        {travelPhotos.map((photo, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${photo})` }}
          />
        ))}
      </div>


      <div className="search-box">
        <div className="service-toggle">
          <button
            className={`toggle-btn ${activeService === 'hotel' ? 'active' : ''}`}
            onClick={() => setActiveService('hotel')}
          >
            Hotels
          </button>
          <button
            className={`toggle-btn ${activeService === 'flight' ? 'active' : ''}`}
            onClick={() => setActiveService('flight')}
          >
            Flights
          </button>
        </div>

        <div className="search-grid">
          <div className="input-group">
            <FiMapPin className="input-icon" />
            <div className="input-content">
              <label>Destination</label>
              <input
                type="text"
                placeholder="Where are you going?"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <FiCalendar className="input-icon" />
            <div className="input-content">
              <label>Check-in</label>
              <input type="date" />
            </div>
          </div>

          <div className="input-group">
            <FiCalendar className="input-icon" />
            <div className="input-content">
              <label>Check-out</label>
              <input type="date" />
            </div>
          </div>

          <div className="input-group">
            <FiUsers className="input-icon" />
            <div className="input-content">
              <label>Travelers</label>
              <select>
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
                <option>4 Travelers</option>
              </select>
            </div>
          </div>
        </div>

        <button className="search-action-btn">
          <FiSearch className="search-icon" />
          Search Now
        </button>
      </div>
    </>
  );
}

export default Home;