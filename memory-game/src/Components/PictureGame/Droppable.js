import React from 'react';
// import pictureData from '../../data';
import styled from "styled-components";

const StyledDiv = styled.div`

background-color: #555;
width: 250px;
height: 400px;
margin: 32px;

`;


export default class Droppable extends React.Component {
        
        drop = (e) => {
                e.preventDefault();
                const data = e.dataTransfer.getData('transfer');
                e.target.appendChild(document.getElementById(data));
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