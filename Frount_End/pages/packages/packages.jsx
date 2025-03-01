import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FiClock, FiMapPin, FiTag, FiHeart } from "react-icons/fi";
import "./packages.css";

const Package = ({ addToCart }) => {
    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState("price");
    const [tourType, setTourType] = useState("all"); // New state for tour type
    const [currentPage, setCurrentPage] = useState(1);
    const packagesPerPage = 4;

    // Existing package data
    const packageData = [
        {
            id: 1,
            title: "Berlin And Prague - Yatra Special",
            duration: "4 Nights / 5 Days",
            destinations: "Berlin (2N) → Prague (2N)",
            price: 50990,
            ecash: "₹1,529",
            imgSrc: "/photos/adventure.jpg",
            type: "cultural", // Added tour type
        },
        {
            id: 2,
            title: "Paris And Rome - Exclusive",
            duration: "5 Nights / 6 Days",
            destinations: "Paris (3N) → Rome (2N)",
            price: 70450,
            ecash: "₹2,149",
            imgSrc: "/photos/cultural.jpg",
            type: "cultural",
        },
        {
            id: 3,
            title: "Tokyo and Kyoto - Premium",
            duration: "6 Nights / 7 Days",
            destinations: "Tokyo (3N) → Kyoto (3N)",
            price: 120000,
            ecash: "₹3,500",
            imgSrc: "/photos/cultural.jpg",
            type: "cultural",
        },
        {
            id: 4,
            title: "Swiss Alps Adventure",
            duration: "7 Nights / 8 Days",
            destinations: "Zurich (4N) → Interlaken (3N)",
            price: 150000,
            ecash: "₹4,000",
            imgSrc: "/photos/cultural.jpg",
            type: "wildlife",
        },
        {
            id: 5,
            title: "Bali Beach - Getaway",
            duration: "6 Nights / 7 Days",
            destinations: "Ubud (2N) → Seminyak (3N)",
            price: 85000,
            ecash: "₹2,500",
            imgSrc: "/photos/cultural.jpg",
            type: "wildlife",
        },
        {
            id: 6,
            title: "New York City Explorer",
            duration: "6 Nights / 7 Days",
            destinations: "Manhattan (4N) → Brooklyn (2N)",
            price: 135000,
            ecash: "₹4,050",
            imgSrc: "/photos/cultural.jpg",
            type: "popular",
        },
    ];

    // Sorting logic
    const sortedPackages = [...packageData]
        .filter((pkg) => tourType === "all" || pkg.type === tourType) // Filter by tour type
        .sort((a, b) => {
            if (sortBy === "price") return a.price - b.price;
            if (sortBy === "duration") return a.duration.localeCompare(b.duration);
            return 0;
        });

    // Pagination logic
    const indexOfLastPackage = currentPage * packagesPerPage;
    const currentPackages = sortedPackages.slice(0, indexOfLastPackage);

    const loadMore = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="package">
            <header className="header">
                <div className="header-content">
                    <h1 className="header-title">Explore Noriva</h1>
                    <p className="header-tagline">Hidden Charm</p>
                </div>
            </header>

            <div className="filter-controls">
                <button
                    className={`filter-btn ${sortBy === "price" ? "active" : ""}`}
                    onClick={() => setSortBy("price")}
                >
                    Sort by Price
                </button>
                <button
                    className={`filter-btn ${sortBy === "duration" ? "active" : ""}`}
                    onClick={() => setSortBy("duration")}
                >
                    Sort by Duration
                </button>
            </div>

            <div className="tour-type-controls">
                <button
                    className={`tour-type-btn ${tourType === "all" ? "active" : ""}`}
                    onClick={() => setTourType("all")}
                >
                    All Tours
                </button>
                <button
                    className={`tour-type-btn ${tourType === "cultural" ? "active" : ""}`}
                    onClick={() => setTourType("cultural")}
                >
                    Cultural Tours
                </button>
                <button
                    className={`tour-type-btn ${tourType === "wildlife" ? "active" : ""}`}
                    onClick={() => setTourType("wildlife")}
                >
                    Wildlife Tours
                </button>
                <button
                    className={`tour-type-btn ${tourType === "popular" ? "active" : ""}`}
                    onClick={() => setTourType("popular")}
                >
                    Popular Tours
                </button>
            </div>

            <section className="tours">
                <h2>Tours in Noriva</h2>
                <div className="package-cards">
                    {currentPackages.map((pkg) => (
                        <div key={pkg.id} className="package-card">
                            <div className="card-badge">{pkg.type}</div>
                            <img
                                src={pkg.imgSrc}
                                alt={pkg.title}
                                className="package-card-img"
                            />
                            <div className="card-content">
                                <h3 className="card-title">{pkg.title}</h3>
                                <ul className="card-details">
                                    <li>
                                        <FiClock />
                                        {pkg.duration}
                                    </li>
                                    <li>
                                        <FiMapPin />
                                        {pkg.destinations}
                                    </li>
                                    <li>
                                        <FiTag />
                                        eCash: {pkg.ecash}
                                    </li>
                                </ul>
                                <div className="price-section">
                                    <div>
                                        <div className="discounted-price">
                                            ₹{pkg.price.toLocaleString()}
                                        </div>
                                    </div>
                                    <button
                                        className="btn-modern"
                                        onClick={() => {
                                            addToCart(pkg);
                                            navigate("/cart");
                                        }}
                                    >
                                        <FiHeart />
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {currentPackages.length < sortedPackages.length && (
                    <div className="load-more">
                        <button className="btn-modern" onClick={loadMore}>
                            Load More
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Package;