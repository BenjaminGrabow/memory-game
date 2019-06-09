import React from 'react';
import pictureData from '../../data';
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import styled from "styled-components";
import uuid from 'uuid';

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
        width: 70%;
        height: 5rem;
}

`;


export default class GameWrapper extends React.Component {
        render() { 
                return ( 
                        <StyledDiv>
                               <Droppable id="dr1" >
{pictureData.map(image => {
        return(
                <div>
        <section>
<Draggable id={uuid()}><img id={uuid()} src={image.img}></img>
                                       </Draggable>
                                       </section>
                                       <section>
                                       <Draggable id={uuid()}><img id={uuid()} src={image.img2}></img>
                                                                              </Draggable>
                                                                              </section>
                                                                              <section>
                                                                              <Draggable id={uuid()}><img id={uuid()} src={image.img3}></img>
                                                                                                                     </Draggable>
                                                                                                                     </section>
                                                                                                                     <section>
                                                                                                                     <Draggable id={uuid()}><img id={uuid()} src={image.img4}></img>
                                                                                                                                                            </Draggable>
                                                                                                                                                            </section>
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
 
