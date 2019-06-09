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


export default class Droppable extends React.Component {
        
        drop = (e) => {
                e.preventDefault();
                const data = e.dataTransfer.getData('transfer');
                e.target.append(document.getElementById(data));
        }

        allowDrop = (e) => {
                e.preventDefault();
        }

        render() {
                return (
                        <StyledDiv id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
                                {this.props.children}
                        </StyledDiv>
                );
        }
}