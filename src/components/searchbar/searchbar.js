import React, { useCallback, useState } from "react";

import './searchbar.css';

const SearchBar = (props) => {
    const [termChange, setTermChange] = useState('');

    const handleChange = useCallback((event) => {
        setTermChange(event.target.value);
    }, [])

    const search = useCallback(() => {
        props.onSearch(termChange);
    }, [props.onSearch, termChange]);

    return (
        <div className="searchBar">
            <input placeholder="Enter a song title" onChange={handleChange} />
            <button className="searchButton" onClick={search}>
                SEARCH
            </button>
        </div>
    )
};

export default SearchBar;