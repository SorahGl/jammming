import React from "react";

import Track from '../track/track';
import './tracklist.css';

const Tracklist = (props) => {
    return (
        <div className="Tracklist">
            { props.tracks.map((track) => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        isRemoval={props.isRemoval}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;