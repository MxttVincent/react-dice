import React from 'react';
import '../index.css';

//Resource used: https://3dtransforms.desandro.com/cube

class Dice extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            diceSideCount: 6
        }
    }

    render(){
        console.log(this.props.diceSkin)
        return (
            <div className="diceContainer">
                <div 
                className={this.props.diceClass + " dice"}
                //Animation end not always firing - dice gets stuck and won't roll again
                // onAnimationEnd={() => {this.props.rolling(false)}}
                id="diceElement">
                    <div 
                        className={"diceFace " + this.props.diceSkin} 
                        id={this.props.diceSkin === "redSkin" ? "face1red" : "face1"} />
                    <div 
                        className={"diceFace " + this.props.diceSkin} 
                        id={this.props.diceSkin === "redSkin" ? "face2red" : "face2"} />
                    <div 
                        className={"diceFace " + this.props.diceSkin} 
                        id={this.props.diceSkin === "redSkin" ? "face3red" : "face3"} />
                    <div 
                        className={"diceFace " + this.props.diceSkin} 
                        id={this.props.diceSkin === "redSkin" ? "face4red" : "face4"} />
                    <div 
                        className={"diceFace " + this.props.diceSkin} 
                        id={this.props.diceSkin === "redSkin" ? "face5red" : "face5"} />
                    <div 
                        className={"diceFace " + this.props.diceSkin} 
                        id={this.props.diceSkin === "redSkin" ? "face6red" : "face6"} />
                </div>
            </div>
        )
    }

}

export default Dice;