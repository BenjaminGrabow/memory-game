import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`

background-color: #555;
width: 80%;
height: 35rem;
margin: .5rem;
display: flex;
flex-wrap: wrap;

`;


const Droppable = props => {

        return (
                <StyledDiv id={props.id}
                        onDrop={props.theDrop}
                        onDragOver={props.allowTheDrop} >
                        {props.children}
                </StyledDiv>
        );

}

export default Droppable;