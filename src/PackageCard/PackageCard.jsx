import React from "react";
import "./PackageCard.css";
import { RiSearchLine } from "react-icons/ri";
import { FaUtensils, FaHotel, FaBus, FaBinoculars } from "react-icons/fa";
import imgtemp from "../../public/photos/adventure.jpg";

const PackageCard = ({ onAddToCart }) => {
    return (
        <div className="packages-container">
            <div className="carousel-container">



            </div>
            <div className="package-details">
                <div className="carousel">
                    <img
                        src={imgtemp}
                        alt="Berlin And Prague"
                        className="package-image"
                    />
                    <a className="fav-icon" title="Add to compare">
                        <i className="fas fa-heart"></i>
                    </a>


                </div>
                <div className="package-naming-container">
                    <p className="package-name">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Berlin And Prague - Yatra Special
                        </a>
                    </p>
                    <div className="package-seller-duration">
                        <div className="package-duration">
                            <p>
                                <span>4</span> Nights / <span>5</span> Days
                            </p>
                        </div>
                        <p className="seller-info">
                            Seller: <a href="#">Yatra</a>
                        </p>
                    </div>
                    <div className="package-destination-itenary">
                        <p>Berlin (2N) → Prague (2N)</p>
                    </div>
                    <div className="package-inclusions">
                        <ul>
                            <li>
                                <FaUtensils style={{ margin: 0 }} className="icon" />
                                <p>Meals</p>
                            </li>
                            <li>
                                <FaHotel className="icon" style={{ margin: 0 }} />
                                <p>Hotel</p>
                            </li>
                            <li>
                                <FaBus className="icon" style={{ margin: 0 }} />
                                <p>Transfer</p>
                            </li>
                            <li>
                                <FaBinoculars className="icon" style={{ margin: 0 }} />
                                <p>Sightseeing</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="package-price-container">
                    <p className="final-price">
                        ₹50,990 <span className="twin">Per Person on twin sharing</span>
                    </p>
                    <button className="btn btn-primary details-btn" onClick={() => onAddToCart()}>View Details</button>
                    <p className="ecash">Earn eCash ₹1,529</p>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
