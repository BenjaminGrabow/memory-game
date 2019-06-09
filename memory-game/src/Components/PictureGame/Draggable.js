import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

img {
        width: 20%;
        height: 6rem;
        margin: 1rem;
}`;

export default class Draggable extends React.Component {

        drag = (e) => {
                e.dataTransfer.setData('transfer', e.target.id);
        }

        dontAllowDrop = (e) => {
                e.stopPropagation();
        }

        render() { 
                return ( 
                        <StyledDiv id={this.props.id} draggable='true' onDragStart={this.dontAllowDrop} >

                        </StyledDiv>
                 );
        }
}