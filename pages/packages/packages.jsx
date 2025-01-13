import React, { useState } from 'react';
import './packages.css';

const Package = () => {
    const [photos, setPhotos] = useState([]);

    const handlePhotoUpload = (event) => {
        const uploadedPhotos = Array.from(event.target.files).map((file) =>
            URL.createObjectURL(file)
        );
        setPhotos((prev) => [...prev, ...uploadedPhotos]);
    };

    return (
        <div className="package">
            <header className="header">
                <h1 className="header-title">Explore Noriva</h1>
                <p className="header-tagline">Hidden Charm</p>
            </header>


            <section className="tours">
                <h2>Tours in Noriva</h2>
                <div className="tour-cards_1">
                    {Array(7).fill().map((_, index) => (
                        <div key={index} className="tour-card-1">
                            <img
                                src="/photos/cultural.jpg"
                                alt={`Tour ${index + 1}`}
                                className="tour-image"
                            />
                            <h3>Tour Title {index + 1}</h3>
                            <p>3 days | 3 Destinations</p>
                            <p className="price">$195.80 <span className="original-price">$320.00</span></p>
                        </div>

                    ))}
                </div>
            </section>


        </div>
    );
};

export default Package;
