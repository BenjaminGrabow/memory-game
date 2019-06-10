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

  src(e, props) {
    // const resultData = [{alt: e.target.alt}];
    
    console.log(props)

    // this.setState({
    //   result: this.state.result.concat(resultData)
    // })
  }

  show(e) {
    const copy = this.state.result;
    console.log(copy)
  }

  render() {
    return (
      <div>
        <StyledDiv>
          <Droppable id="dr1" >
            {this.state.pictures.map(image => {
              return (
                <div key={uuid()}>
                  <Draggable id={uuid()} safesrc={this.src}>
                    <img id={uuid()} src={image.img} alt={image.alt}></img>
                  </Draggable>
                </div>
              )
            })}
          </Droppable>
          <Droppable id="dr2" showme={this.show}>
          </Droppable>
        </StyledDiv>
        <button onClick={this.checkResult}>Show the result</button>
      </div>
    );
  }
}

