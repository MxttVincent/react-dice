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
                    <div className="diceFace" id="face1" />
                    <div className="diceFace" id="face2" />
                    <div className="diceFace" id="face3" />
                    <div className="diceFace" id="face4" />
                    <div className="diceFace" id="face5" />
                    <div className="diceFace" id="face6" />
                </div>
            </div>
        )
    }

}

export default Dice;