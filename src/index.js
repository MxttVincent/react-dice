import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dice from './components/dice';

class DiceArea extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      rollResult: null,
      diceCount: 1,
      diceSideCount: 6
    };
  }
  
  render() {
    return (
      <div className="app">
        <p>Roll the die!</p>
        <div id="diceArea">
            <Dice />
        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <React.StrictMode>
    <DiceArea />
  </React.StrictMode>,
  document.getElementById('root')
);