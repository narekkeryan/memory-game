import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Difficulties from '../constants/Difficulties';
import Timer from '../containers/Timer';
import { init } from '../scripts/init';
import backFace from '../images/grooming-1801287_640.png';

class SinglePlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flippedIndexes: [],
            flippedKeys: [],
            items: [],
            seconds: 20,
            delay: 5,
            won: false,
            loading: true
        };

        this.setStateAsync = this.setStateAsync.bind(this);
    }

    async componentDidMount() {
        /* get items and seconds */
        const { items, seconds } = init(this.props.gameRoom.difficulty);
        await this.setStateAsync({ items , seconds, loading: false  });

        /* keep images open for some time to memorize */
        this.state.items.map((source, key) => this.setState({ flippedIndexes: [ ...this.state.flippedIndexes, key ] }));
        setTimeout(() => { this.setState({ flippedIndexes: [] }) }, this.state.delay * 1000);

        /* show modal when time is ended and make game over */
        let timeEnded = setInterval(() => {
            if (this.props.timeEnded) {
                clearInterval(timeEnded);
                setTimeout(this.props.endGame, 5000);
            }
        }, 1000);
    }

    /* make setState work with async/await */
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
                { this.state.loading ? <div>Loading...</div> : (<div>
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
                        <div className="sign-out" onClick={this.props.endGame}>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                        <Modal isOpen={this.props.timeEnded} centered>
                            <ModalHeader>Time is up</ModalHeader>
                            <ModalBody>Your time is over. You will be redirected soon.</ModalBody>
                        </Modal>
                        <Modal isOpen={this.state.won} centered>
                            <ModalHeader>You Won!</ModalHeader>
                            <ModalBody>You won this round. You will be redirected soon.</ModalBody>
                        </Modal>
                    </div>) }
            </div>
        );
    }
}

SinglePlayer.propTypes = {
    gameRoom: PropTypes.object.isRequired,
    timeEnded: PropTypes.bool.isRequired,
    endGame: PropTypes.func.isRequired,
    increaseTime: PropTypes.func.isRequired
};

export default SinglePlayer;