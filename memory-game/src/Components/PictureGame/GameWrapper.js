import React from 'react';
import pictureData from '../../data';
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import styled from "styled-components";
import uuid from 'uuid';

const StyledDiv = styled.div`

width: 100%;
display: flex;
justify-content: center;

img {
        padding: 1rem;
        color: #555;
        background-color: white;
        border-radius: .3rem;
        width: 5rem;
        height: 5rem;
        margin: .5rem;
}
`;


export default class GameWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      result: [],
    }
  }

  componentDidMount() {
    this.setState({
      pictures: pictureData
    })
  };

  render() {
    return (
      <div>
      <StyledDiv>
        <Droppable id="dr1" >
          {this.state.pictures.map(image => {
            return (
              <div>
                <section>
                  <Draggable id={uuid()}><img id={uuid()} src={image.img} alt="memory game"></img>
                  </Draggable>
                </section>
                <section>
                  <Draggable id={uuid()}><img id={uuid()} src={image.img2} alt="memory game"></img>
                  </Draggable>
                </section>
                <section>
                  <Draggable id={uuid()}><img id={uuid()} src={image.img3} alt="memory game"></img>
                  </Draggable>
                </section>
                <section>
                  <Draggable id={uuid()}><img id={uuid()} src={image.img4} alt="memory game"></img>
                  </Draggable>
                </section>
              </div>
            )
          })}
        </Droppable>
        <Droppable id="dr2" >
        </Droppable>
      </StyledDiv>
        <button onClick={this.checkResult}>Show the result</button>
        </div>
    );
  }
}

