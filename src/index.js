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
      diceSideCount: 6,
      diceClass: "default",
      diceRolling: false
    };
  }

  getDiceRoll = () => {
    if (!this.state.diceRolling) {
      this.setState({ diceRolling: true });
      fetch("https://rolz.org/api/?1d6.json")
      .then(res => res.json())
      .then(
        //Result returns the total but is suitable for a single die roll
        (json) => { this.setState({
          rollResult: json.result,
          diceClass: "show" + json.result,
          diceRolling: false
        });
      },
        //Catch errors
        (error) => { this.setState({
          rollResult: "Error reaching rolling API:", error
        })},
      );
    }
  }

  rollDie = (number) => {
    switch(number) {
      case 1: alert();break;
      case 2: break;
      case 3: break;
      case 4: break;
      case 5: break;
      case 6: break;
      default: break;
    }
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
            <Dice diceClass={this.state.diceClass}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(
    <DiceArea />,
  document.getElementById('root')
);