import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({
    searchQuery,
    onSearchChange,
    placeholder = "Search By name email or role",
}) => {
    const [inputValue, setInputValue] = useState(searchQuery);

    // Update the inputValue as the user types
    const handleSearchInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Trigger search only when Enter key is pressed
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearchChange(inputValue);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={inputValue}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="search-input"
            />
            <button className="search-icon" onClick={() => onSearchChange(inputValue)}>
                🔍
            </button>
        </div>
    );
};

export default SearchBar;
