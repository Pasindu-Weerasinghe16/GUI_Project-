import React from "react";
import "./SuccessPage.css";

const SuccessPage = ({ orderDetails }) => {
    const subtotal = orderDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const salesTax = (subtotal * 0.1).toFixed(2);
    const grandTotal = (subtotal + parseFloat(salesTax)).toFixed(2);

    return (
        <div className="success-page">

            <div className="success-background">
                <h1 className="success-title">Thank You for Your Purchase!</h1>
            </div>


            <div className="order-details-container">
                <h2 className="order-heading">Order Details</h2>
                <div className="order-details">
                    {orderDetails.map((item, index) => (
                        <div className="order-item" key={index}>
                            <img src={item.imgSrc} alt={item.name} className="order-item-image" />
                            <div className="order-item-info">
                                <h3>{item.name}</h3>
                                <p>{item.details}</p>
                                <p className="order-item-price">₹{item.price.toLocaleString()} x {item.quantity}</p>
                            </div>
                            <p className="order-item-total">
                                ₹{(item.price * item.quantity).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="order-summary">
                    <p><strong>Subtotal:</strong> ₹{subtotal}</p>
                    <p><strong>Sales Tax:</strong> ₹{salesTax}</p>
                    <p><strong>Grand Total:</strong> ₹{grandTotal}</p>
                </div>
            </div>


            <div className="success-message">
                <h2>Your trip is booked successfully!</h2>
                <p>We have sent the details to your email. Have a great journey!</p>
            </div>
        </div>
    );
};

export default SuccessPage;
