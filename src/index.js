import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dice from './components/dice';

class DiceArea extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      rollResult: "Roll the die!",
      diceCount: 1,
      diceSideCount: 6
    };
  }

  getDiceRoll = () => {
    fetch("https://rolz.org/api/?1d6.json")
    .then(res => res.json())
    .then(
      (json) => { this.setState({
        rollResult: json.result
      });
      console.log(json.result)
    },
      (error) => { this.setState({
        rollResult: "Error reaching rolling API."
      })},
    )
  }
  
  render() {
    return (
      <div className="app">
        <h1>
          <p>{this.state.rollResult}</p>
          <div id="rollButton" onClick={this.getDiceRoll}>
            <p>Roll</p>
          </div>
        </h1>
        <div id="diceArea">
            <Dice />
        </div>
      </div>
    );
  }

}

ReactDOM.render(
    <DiceArea />,
  document.getElementById('root')
);