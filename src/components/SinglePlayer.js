import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Difficulties from '../constants/Difficulties';
import Timer from '../containers/Timer';
import { shuffle } from '../scripts/shuffle';
import backFace from '../images/grooming-1801287_640.png';

const pngs = require.context('../images/uploads', false, /\.png$/);

const keys = pngs.keys();
const pngsArray = keys.map(key => pngs(key));

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flippedIndexes: [],
            flippedKeys: [],
            items: [],
            seconds: 20,
            delay: 5,
            won: false
        };

        this.setStateAsync = this.setStateAsync.bind(this);
    }

    async componentWillMount() {
        let pics;
        switch (this.props.gameRoom.difficulty) {
            case 0:
                pics = pngsArray.slice(0, 6);
                break;
            case 1:
                pics = pngsArray.slice(0, 12);
                this.setState({ seconds: 30 });
                break;
            case 2:
                pics = pngsArray.slice(0, 18);
                this.setState({ seconds: 40 });
                break;
            case 3:
                pics = pngsArray.slice(0, 25);
                this.setState({ seconds: 45 });
                break;
            default:
                console.error('Unknown difficulty level.');
        }
        await this.setState({ items: shuffle([...pics, ...pics]) });
        this.state.items.map((source, key) => this.setState({ flippedIndexes: [ ...this.state.flippedIndexes, key ] }));
        setTimeout(() => { this.setState({ flippedIndexes: [] }) }, this.state.delay * 1000);
    }

    componentDidMount() {
        let timeEnded = setInterval(() => {
            if (this.props.timeEnded) {
                clearInterval(timeEnded);
                setTimeout(this.props.endGame, 5000);
            }
        }, 1000);
    }

    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    async flipItem(index, key) {
        if (this.state.flippedKeys.length < 2
            && index !== this.state.flippedIndexes[this.state.flippedIndexes.length-1]
            && this.state.flippedIndexes.length !== this.state.items.length) {

            await this.setStateAsync({
                flippedIndexes: [...this.state.flippedIndexes, index],
                flippedKeys: [...this.state.flippedKeys, key]
            });

            if (this.state.flippedKeys.length === 2) {
                setTimeout(async () => {
                    if (this.state.flippedKeys[0] === this.state.flippedKeys[1]) {
                        this.props.increaseTime(this.state.delay + 1);
                        if (this.state.flippedIndexes.length === this.state.items.length) {
                            this.setState({ won: true });
                            setTimeout(this.props.endGame, 5000);
                        }
                    } else {
                        let flippedIndexes = this.state.flippedIndexes;
                        flippedIndexes.splice(-2, 2);
                        await this.setStateAsync({ flippedIndexes: flippedIndexes });
                    }
                    this.setState({ flippedKeys: [] });
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div className="game-room">
                <h1>{this.props.gameRoom.name}</h1>
                <p dangerouslySetInnerHTML={{__html: this.props.gameRoom.info}} />
                <Timer seconds={this.state.seconds} delay={this.state.delay} stop={this.state.won} />
                <div className={"arena " + Difficulties[this.props.gameRoom.difficulty]}>
                    { this.state.items.map((source, i) => {
                        return (
                            <div key={i} className={~this.state.flippedIndexes.indexOf(i) ? 'item' : 'item flipped'} onClick={() => this.flipItem(i, source)}>
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
                <Modal isOpen={this.props.timeEnded} centered>
                    <ModalHeader>Time is up</ModalHeader>
                    <ModalBody>Your time is over. You will be redirected soon.</ModalBody>
                </Modal>
                <Modal isOpen={this.state.won} centered>
                    <ModalHeader>You Won!</ModalHeader>
                    <ModalBody>You won this round. You will be redirected soon.</ModalBody>
                </Modal>
            </div>
        );
    }
}

Game.propTypes = {
    gameRoom: PropTypes.object.isRequired,
    timeEnded: PropTypes.bool.isRequired,
    endGame: PropTypes.func.isRequired,
    increaseTime: PropTypes.func.isRequired
};

export default Game;