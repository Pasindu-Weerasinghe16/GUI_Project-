import React, { useState } from "react";
import "./Slider.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const Slider = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Switzerland",
            description: "X-Dev, Transforming code into visual poetry..!",
            backgroundImage: "https://i.ibb.co/qCkd9jS/img1.jpg",
        },
        {
            id: 2,
            name: "Finland",
            description: "X-Dev, Transforming code into visual poetry..!",
            backgroundImage: "https://i.ibb.co/jrRb11q/img2.jpg",
        },
        {
            id: 3,
            name: "Iceland",
            description: "X-Dev, Transforming code into visual poetry..!",
            backgroundImage: "https://i.ibb.co/NSwVv8D/img3.jpg",
        },
        {
            id: 4,
            name: "Australia",
            description: "X-Dev, Transforming code into visual poetry..!",
            backgroundImage: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
        },
        {
            id: 5,
            name: "Netherland",
            description: "X-Dev, Transforming code into visual poetry..!",
            backgroundImage: "https://i.ibb.co/jTQfmTq/img5.jpg",
        },
        {
            id: 6,
            name: "Ireland",
            description: "X-Dev, Transforming code into visual poetry..!",
            backgroundImage: "https://i.ibb.co/RNkk6L0/img6.jpg",
        },
    ]);

    const nextSlide = () => {
        setItems((prevItems) => {
            const [first, ...rest] = prevItems;
            return [...rest, first];
        });
    };

    const prevSlide = () => {
        setItems((prevItems) => {
            const last = prevItems[prevItems.length - 1];
            const rest = prevItems.slice(0, -1);
            return [last, ...rest];
        });
    };

    return (
        <div className="container">
            <div className="slide">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`item ${index === items.length - 2 ? "active" : ""}`}
                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                    >
                        {index === items.length - 2 && (
                            <div className="content">
                                <div className="name">{item.name}</div>
                                <div className="des">{item.description}</div>
                                <button>See More</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="button">
                <button className="next" onClick={nextSlide}>
                    <GoArrowLeft />
                </button>
                <button className="prev" onClick={prevSlide}>
                    <GoArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;
