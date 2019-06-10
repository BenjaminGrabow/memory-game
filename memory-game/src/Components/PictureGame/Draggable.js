import React from 'react';

export default class Draggable extends React.Component {

        drag = (e) => {
                e.dataTransfer.setData('transfer', e.target.id);
        }

        dontAllowDrop = (e) => {
                e.stopPropagation();
        }

        render() { 
                return ( 
                        <div id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.dontAllowDrop} onClick={event => this.props.safesrc(event, this.props)} >
{this.props.children}
                        </div>
                 );
        }
}