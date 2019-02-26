import React from 'react';
import Omikuji from "./components/Omikuji";

const omikujiPossibilities = [
  {
    name: 'daikichi',
    weight: 30,
  },
  {
    name: 'kichi',
    weight: 50,
  },
  {
    name: 'daikyo',
    weight: 20,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Omikuji
          omikujiPossibilities={omikujiPossibilities}
        />
      </div>
    );
  }
}

export default App;
