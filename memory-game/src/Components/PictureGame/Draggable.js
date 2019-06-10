import React from 'react';

const Draggable = props => {
        return (
                <div id={props.id}
                        draggable='true'
                        onDragStart={props.dragFunction}
                        onDragOver={props.noAllowDrop}
                        onClick={event => props.safesrc(event, props)} >
                        {props.children}
                </div>
        );
}

export default Draggable