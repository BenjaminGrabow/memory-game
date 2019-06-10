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
      pictures: pictureData,
    })
  };

  drag = (event) => {
    event.dataTransfer.setData('transfer', event.target.id);
  };

  dontAllowDrop = (event) => {
    event.stopPropagation();
  };

  allowDrop = (event) => {
    event.preventDefault();
  }

  drop = (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData('transfer');

    event.target.append(document.getElementById(data));
  }

  render() {
    console.log(this.state.result)
    return (
      <div>
        <StyledDiv >
          <Droppable id="dr1"
            allowTheDrop={this.allowDrop}
            theDrop={this.drop}>
            {this.state.pictures.map(image => {
              return (
                <div key={uuid()}>
                  <Draggable
                    dragFunction={this.drag}
                    noAllowDrop={this.dontAllowDrop}
                    id={uuid()}
                    >
                    <img 
                    id={image.id}
                      src={image.img}
                      alt={image.alt}></img>
                  </Draggable>
                </div>
              )
            })}
          </Droppable>
          <Droppable id="dr2"
            allowTheDrop={this.allowDrop}
            theDrop={this.drop} >
          </Droppable>
        </StyledDiv>
        <button onClick={this.checkResult}>
          Show the result
          </button>
      </div>
    );
  }
}

