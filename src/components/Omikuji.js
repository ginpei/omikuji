import React from 'react';
import styled from 'styled-components';
import { CenterBox } from "./misc";

const OmikujiContainer = styled(CenterBox)`
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
`;
const OmikujiButton = styled.button`
  background-color: tomato;
  color: snow;
  height: 80vmin;
  width: 80vmin;
`;
const OmikujiResult = styled(CenterBox)`
  animation: shake 100ms infinite step-start;
  font-size: 45vmin;

  @keyframes shake {
    0% { transform: translate(1vmin, 1.5vmin); }
    25% { transform: translate(-1.5vmin, 1.5vmin); }
    50% { transform: translate(-1.5vmin, -1vmin); }
    75% { transform: translate(1vmin, -1vmin); }
    100% { transform: translate(1vmin, 1.5vmin); }
  }
`;

class Omikuji extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
    this.onOmikujiClick = this.onOmikujiClick.bind(this);
  }

  render() {
    const { result } = this.state;
    if (result) {
      switch (result.name) {
        case 'daikichi':
          return (
            <OmikujiContainer>
              <OmikujiResult>大吉</OmikujiResult>
            </OmikujiContainer>
          );
        case 'kichi':
          return (
            <OmikujiContainer>
              <OmikujiResult>吉</OmikujiResult>
            </OmikujiContainer>
          );
        case 'daikyo':
          return (
            <OmikujiContainer>
              <OmikujiResult>大凶</OmikujiResult>
            </OmikujiContainer>
          );
        default:
          console.warn('Result', result);
          throw new Error('Unknown result');
      }
    }

    return (
      <OmikujiContainer>
        <OmikujiButton
          onClick={this.onOmikujiClick}
        >
          おみくじ
        </OmikujiButton>
      </OmikujiContainer>
    );
  }

  onOmikujiClick(event) {
    const result = this.getOracle();
    this.setState({ result });
  }

  getOracle() {
    // --------->               = rand
    // +------+----------+----+ = wholeWeight
    // ^大吉  ^吉        ^大凶

    const possibilities = this.props.omikujiPossibilities;
    const wholeWeight = possibilities.reduce((a, v) =>  a + v.weight, 0);
    const rand = Math.floor(Math.random() * wholeWeight);

    let result;
    possibilities.reduce((weight, v) => {
      const currentWeight = weight + v.weight;
      if (rand < currentWeight) {
        result = v;
        return NaN;
      }
      return currentWeight;
    }, 0);

    return result;
  }
}

export default Omikuji;
