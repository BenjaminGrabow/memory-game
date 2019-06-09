import React from 'react';
import pictureData from '../../data';
import styled from "styled-components";

const StyledDiv = styled.div`

img {
        width: 20%;
        height: 6rem;
        margin: 1rem;
}`;


const Images = () => {
        return ( 
                pictureData.map((image, index) => {
                        return(
                                <StyledDiv key={index}>
                                        <img src={image.img} alt="memory game" />
                                        <img src={image.img2} alt="memory game" />
                                        <img src={image.img3} alt="memory game" />
                                        <img src={image.img4} alt="memory game" />
                                </StyledDiv>
                        )
                })
         );
}
 
export default Images;