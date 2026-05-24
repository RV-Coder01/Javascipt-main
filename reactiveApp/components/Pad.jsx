import React from 'react';
export default function Pad(props) {
    const Opacity = props.pad.on ? 1 : 0.3

    return (
        <button
            key={props.pad.id}
            style={
                { 
                    backgroundColor: props.pad.color, 
                    opacity: Opacity
                }
            }
            onClick={() => props.toggle(props.pad.id)}>
            {props.pad.id}
        </button>
    )
}