import React from 'react';
// import pictureData from '../../data';
import styled from "styled-components";

const StyledDiv = styled.div`

background-color: #555;
width: 80%;
height: 30rem;
margin: 3.2rem;
display: flex;

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