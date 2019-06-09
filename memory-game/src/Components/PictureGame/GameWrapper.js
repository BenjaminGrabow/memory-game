import React from 'react';
import pictureData from '../../data';
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import styled from "styled-components";

const StyledDiv = styled.div`

width: 100%;
padding: 3.2rem;
display: flex;
justify-content: center;

img {
        padding: 1rem;
        color: #555;
        background-color: white;
        border-radius: .3rem;
        width: 20%;
        height: 3rem;
}

`;



export default class GameWrapper extends React.Component {
        render() { 
                return ( 
                        <StyledDiv>
                               <Droppable id="dr1" >
{pictureData.map((image, index) => {
        return(
        <div>
<Draggable id={index}><img id={index} src={image.img}></img>
                                       </Draggable>
                                       </div>
                                       )
})}
                               </Droppable>
                               <Droppable id="dr2" >
                                       </Droppable> 
                        </StyledDiv>
                 );
        }
}
 
