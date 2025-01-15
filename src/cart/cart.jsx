import React, { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router";

const Cart = ({ cartItems, setCartItems }) => {


    const addItemToCart = () => {
        const newItem = {
            id: cartItems.length + 1,
            name: "Exclusive Europe (Air Inclusive) - Yatra Special",
            details: "Paris (3N) → Schaffhausen (3N) → Innsbruck (1N)",
            price: 215990,
            quantity: 1,
            imgSrc: "/photos/europe.jpg",
        };
        setCartItems([...cartItems, newItem]);
    };

    const updateQuantity = (id, increment) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + increment > 0 ? item.quantity + increment : 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const salesTax = (subtotal * 0.1).toFixed(2); // Example 10% tax
    const grandTotal = (subtotal + parseFloat(salesTax)).toFixed(2);
    const navigate = useNavigate();
    return (
        <div className="cart-page">
            {/* Fixed Background Section */}
            <div className="fixed-background">
                <h1 className="page-title">Your Travel Cart</h1>
            </div>

            {/* Cart Container */}
            <div className="cart-container">
                {/* Cart Items Section */}
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.imgSrc} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <h2>{item.title}</h2>
                                <p>{item.destinations}</p>
                                <p className="item-price">₹{item.price.toLocaleString()}</p>
                            </div>
                            <div className="item-actions">
                                <div className="quantity-selector">
                                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>
                                <p className="item-total">₹{(item.price * item.quantity).toLocaleString()}</p>
                                <button className="remove-item" onClick={() => removeItem(item.id)}>✕</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <p>Subtotal:</p>
                        <p>₹{subtotal.toLocaleString()}</p>
                    </div>
                    <div className="summary-row">
                        <p>Sales Tax:</p>
                        <p>₹{salesTax}</p>
                    </div>
                    <div className="summary-total">
                        <p>Grand Total:</p>
                        <p>₹{grandTotal.toLocaleString()}</p>
                    </div>
                    <button className="checkout-button" onClick={() => navigate("/SuccessPage")}>Check Out</button>
                    <button className="add-item-button" onClick={() => navigate("/packages")}>
                        Add New Item to Cart
                    </button>
                    <p className="free-shipping">Congrats, you're eligible for <b>Free Shipping</b></p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
