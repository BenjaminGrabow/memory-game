import React from 'react';
import pictureData from '../../data';
import styled from "styled-components";

const StyledDiv = styled.div`

img {
        width: 20%;
        height: 6rem;
        margin: 1rem;
}`;


export default class DroppableImages extends React.Component {
        
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
                                {pictureData.map((image, index) => {
                                        return (
                                                <div key={index}>
                                                        <img src={image.img} alt="memory game" />
                                                        <img src={image.img2} alt="memory game" />
                                                        <img src={image.img3} alt="memory game" />
                                                        <img src={image.img4} alt="memory game" />
                                                </div>
                                        )
                                })}
                        </StyledDiv>
                );
        }
}