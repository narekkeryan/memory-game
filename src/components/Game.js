import React, { Component } from 'react';
import backFace from '../images/grooming-1801287_640.png';

const pngs = require.context('../images/uploads', false, /\.png$/);

const keys = pngs.keys();
const pngsArray = keys.map(key => pngs(key));

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { flipped: [], items: this.shuffle([...pngsArray, ...pngsArray]) };
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    flipItem(index) {
        this.setState({ flipped: [...this.state.flipped, index] });
    }

    render() {
        return (
            <div className="arena">
                { this.state.items.map((source, i) => {
                    return (
                        <div key={i} className={~this.state.flipped.indexOf(i) ? 'item' : 'item flipped'} onClick={() => this.flipItem(i)}>
                            <div className="front face">
                                <img src={source} alt=""/>
                            </div>
                            <div className="back face">
                                <img src={backFace} alt=""/>
                            </div>
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Game;