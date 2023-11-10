import React, { useCallback } from "react";

import './track.css';

const Track = (props) => {
    const addTrack = useCallback((event) => {
        props.onAdd(props.track)
    }, [props.onAdd, props.track]);

    const removeTrack = useCallback((evenet) => {
        props.onRemove(props.track)
    }, [props.onRemove, props.track]);

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="trackAction" onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className='trackAction' onClick={addTrack}>
                +
            </button>
        );
    }

    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;