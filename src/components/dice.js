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
                <div className="dice">
                    <div className="diceFace" id="face1"></div>
                    <div className="diceFace" id="face2"></div>
                    <div className="diceFace" id="face3"></div>
                    <div className="diceFace" id="face4"></div>
                    <div className="diceFace" id="face5"></div>
                    <div className="diceFace" id="face6"></div>
                </div>
            </div>
        )
    }

}

export default Dice;