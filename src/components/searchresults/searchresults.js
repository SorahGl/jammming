import React from "react";

import Tracklist from '../tracklist/tracklist';
import './searchresults.css';

const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <h3>Results</h3>
            <Tracklist 
                onAdd={props.onAdd}
                tracks={props.searchResults}
            />
        </div>
    )
}

export default SearchResults;