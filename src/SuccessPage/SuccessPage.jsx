import React from "react";
import "./SuccessPage.css";

const SuccessPage = ({ orderDetails }) => {
    return (
        <div className="success-page">
            {/* Fixed Background Section */}
            <div className="success-background">
                <h1 className="success-title">Thank You for Your Purchase!</h1>
            </div>

            {/* Order Details Section */}
            <div className="order-details-container">
                <h2 className="order-heading">Order Details</h2>
                <div className="order-details">
                    {orderDetails.items.map((item, index) => (
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
                    <p><strong>Subtotal:</strong> ₹{orderDetails.subtotal.toLocaleString()}</p>
                    <p><strong>Sales Tax:</strong> ₹{orderDetails.salesTax}</p>
                    <p><strong>Grand Total:</strong> ₹{orderDetails.grandTotal.toLocaleString()}</p>
                </div>
            </div>

            {/* Success Message */}
            <div className="success-message">
                <h2>Your trip is booked successfully!</h2>
                <p>We have sent the details to your email. Have a great journey!</p>
            </div>
        </div>
    );
};

export default SuccessPage;
