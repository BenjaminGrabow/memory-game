import React from 'react';
import pictureData from '../../data';
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import styled from "styled-components";

const StyledDiv = styled.div`

width: 100%;
padding: 32px;
display: flex;
justify-content: center;

p {
        padding: 8px;
        color: #555;
        background-color: white;
        border-radius: 3px;
}

`;



export default class GameWrapper extends React.Component {
        render() { 
                return ( 
                        <StyledDiv>
                               <Droppable id="dr1" >
                                       <Draggable id="item1"><p>HElLO</p></Draggable>
                               </Droppable>
                               <br />
                               <Droppable id="dr2" >
                                       </Droppable> 
                        </StyledDiv>
                 );
        }
}
 
