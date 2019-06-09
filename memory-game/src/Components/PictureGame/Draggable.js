import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

width: 100%;
height: 2rem;
background-color: green;
margin: 3rem;

`;

export default class Draggable extends React.Component {

        drag = (e) => {
                e.dataTransfer.setData('transfer', e.target.id);
        }

        dontAllowDrop = (e) => {
                e.stopPropagation();
        }

        render() { 
                return ( 
                        <StyledDiv id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.dontAllowDrop} >
{this.props.children}
                        </StyledDiv>
                 );
        }
}