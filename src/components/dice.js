import React from 'react';
import '../index.css';

class Dice extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            diceSideCount: 6,
            chosenSkin: "default"
        }
    }

    render(){
        return (
            <div className="diceContainer">
                <div 
                className={this.props.diceClass + " dice"}
                //onAnimationEnd={() => this.setState({ diceRolling: false })}
                >
                    <div className="diceFace" id="face1">1</div>
                    <div className="diceFace" id="face2">2</div>
                    <div className="diceFace" id="face3">3</div>
                    <div className="diceFace" id="face4">4</div>
                    <div className="diceFace" id="face5">5</div>
                    <div className="diceFace" id="face6">6</div>
                </div>
            </div>
        )
    }

}

export default Dice;