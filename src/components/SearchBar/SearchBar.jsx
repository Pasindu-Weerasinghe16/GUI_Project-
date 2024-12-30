import React from "react";
import "./components/SearchBar/SearchBar.css";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-item">
                <label>Location</label>
                <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="search-item">
                <label>Check in - Check out</label>
                <input type="text" placeholder="December 05 ~ January 14" />
            </div>
            <div className="search-item">
                <label>Guest</label>
                <input type="text" placeholder="2 adults - 1 child - 1 room" />
            </div>
            <button className="btn-search">Search</button>
        </div>
    );
};

export default SearchBar;
