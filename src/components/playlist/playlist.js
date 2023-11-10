import React, { useCallback } from "react";

import './playlist.css';
import Tracklist from '../tracklist/tracklist';

const Playlist = (props) => {
    const handleChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange])

    return (
        <div className="playlist">
            <input onChange={handleChange} defaultValue={'New Playlist'}/>
            <Tracklist 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="playlistSaveButton" onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    )
};

export default Playlist;