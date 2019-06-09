import React from 'react';
import styled from "styled-components";

export default class Draggable extends React.Component {

        drag = (e) => {
                e.dataTransfer.setData('transfer', e.target.id);
        }

        dontAllowDrop = (e) => {
                e.stopPropagation();
        }

        render() { 
                return ( 
                        <div id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.dontAllowDrop} >
{this.props.children}
                        </div>
                 );
        }
}