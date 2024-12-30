import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const images = [
        "/images/picture1.jpg",
        "/images/picture2.jpg",
        "/images/picture3.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >
            <div className="hero-content">
                <h1>Find Next Place To Visit</h1>
                <p>Discover amazing places at exclusive deals</p>
                <div className="search-bar">
                    <input type="text" placeholder="Where are you going?" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
