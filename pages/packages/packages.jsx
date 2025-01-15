import React from "react";
import "./packages.css";
import PackageCard from "../../src/PackageCard/PackageCard";

const Package = () => {
    const packageData = [
        {
            id: 1,
            title: "Berlin And Prague - Yatra Special",
            duration: "4 Nights / 5 Days",
            destinations: "Berlin (2N) → Prague (2N)",
            price: "₹50,990",
            ecash: "₹1,529",
            imgSrc: "/photos/adventure.jpg",
        },
        {
            id: 2,
            title: "Paris And Rome - Exclusive",
            duration: "5 Nights / 6 Days",
            destinations: "Paris (3N) → Rome (2N)",
            price: "₹70,450",
            ecash: "₹2,149",
            imgSrc: "/photos/cultural.jpg",
        },
        {
            id: 3,
            title: "Tokyo and Kyoto - Premium",
            duration: "6 Nights / 7 Days",
            destinations: "Tokyo (3N) → Kyoto (3N)",
            price: "₹1,20,000",
            ecash: "₹3,500",
            imgSrc: "/photos/japan.jpg",
        },
        {
            id: 4,
            title: "Swiss Alps Adventure",
            duration: "7 Nights / 8 Days",
            destinations: "Zurich (4N) → Interlaken (3N)",
            price: "₹1,50,000",
            ecash: "₹4,000",
            imgSrc: "/photos/swiss.jpg",
        },
    ];

    return (
        <div className="package">
            <header className="header">
                <h1 className="header-title">Explore Noriva</h1>
                <p className="header-tagline">Hidden Charm</p>
            </header>

            <section className="tours">
                <h2>Tours in Noriva</h2>
                <div className="package-cards">
                    {packageData.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            title={pkg.title}
                            duration={pkg.duration}
                            destinations={pkg.destinations}
                            price={pkg.price}
                            ecash={pkg.ecash}
                            imgSrc={pkg.imgSrc}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Package;
