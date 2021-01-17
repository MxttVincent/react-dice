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
      diceRolling: false,
      diceSkin: "redSkin",
      modalState: "initial",
    };
  }

  getDiceRoll = () => {
    if (!this.state.diceRolling) {
      this.setState({ diceRolling: true });
      //URL Params: 1d6 means one roll of a dice with 6 sides
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

      //Fallback as onAnimationEnd doesn't appear to fire consistently - computedStyle remains as running
      //setTimeout(() => this.setState({ diceRolling: false }), 1200);
    }
  }

  handleModalClick = (evt) => {
    this.setState({
      modalState: "hiddenModal",
      diceSkin: evt.target.id.replace("Choice", "")
    });
  }

  // rollStatus = (active) => {
  //   this.setState({ diceRolling: active });
  // }
  
  render() {
    return (
      <div className="app">
        <h1>
          <p>Roll the die!</p>

          <div id="rollButton" onClick={this.getDiceRoll}>
            <p>Roll</p>
          </div>

          <div id="reskinButton" onClick={() => { this.setState({ modalState: "activeModal" }) }}>
            <p>Change Skin</p>
          </div>
        </h1>

        <div id="modal" onClick={this.handleModalClick} className={this.state.modalState}>
          <div id="innerModal">
            <div id="whiteSkinChoice"></div>
            <div id="blackSkinChoice"></div>
            <div id="redSkinChoice"></div>
          </div>
        </div>
        <div id="diceArea">
            {/* Rolling prop not used until animation end figured out */}
            <Dice 
              diceClass={this.state.diceClass} 
              rolling={this.rollStatus}
              diceSkin={this.state.diceSkin}
            />
        </div>
      </div>
    );
  }

}

ReactDOM.render(
    <DiceArea />,
  document.getElementById('root') || document.createElement('div') //Needed for testing
);