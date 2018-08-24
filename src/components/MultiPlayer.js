import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import Modal from '../components/Modal';
import Difficulties from '../constants/Difficulties';
import { init } from '../scripts/init';
import {
    addMember, getMembers, removeMember,
    setItems, getItems, setFlipped, getFlipped
} from '../socket';
import backFace from '../images/grooming-1801287_640.png';

class MultiPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flippedIndexes: [],
            flippedKeys: [],
            items: [],
            gameEnded: false,
            members: [],
            memberId: '',
            started: false,
            activeMemberId: '',
            points: {},
            winner: ''
        };

        this.setStateAsync = this.setStateAsync.bind(this);
    }

    componentDidMount() {
        const { items } = init(this.props.gameRoom.difficulty);
        setItems(this.props.gameRoom.id, items);
        getItems(data => {
            if (data.room === this.props.gameRoom.id) {
                this.setState({ items: data.items });
            }
        });

        getFlipped(async data => {
            if (data.room = this.props.gameRoom.id) {
                await this.setStateAsync({
                    flippedIndexes: data.flippedIndexes,
                    flippedKeys: data.flippedKeys
                });

                if (this.state.flippedKeys.length === 2) {
                    setTimeout(async () => {
                        if (this.state.flippedKeys[0] === this.state.flippedKeys[1]) {
                            let updatedPoints = this.state.points[this.state.activeMemberId] + 2;
                            this.setState({ points: { ...this.state.points, [this.state.activeMemberId]: updatedPoints } });
                            if (this.state.flippedIndexes.length === this.state.items.length) {
                                const points = this.state.points;
                                const winner = Object.keys(this.state.points).reduce((a, b) => {
                                    return points[a] > points[b] ? a : (points[a] < points[b] ? b : '');
                                });
                                this.setState({ gameEnded: true, winner: winner });
                                setTimeout(this.props.endGame, 5000);
                            }
                        } else {
                            let flippedIndexes = this.state.flippedIndexes;
                            flippedIndexes.splice(-2, 2);
                            await this.setStateAsync({ flippedIndexes: flippedIndexes });

                            /* Change Active Member */
                            let members = this.state.members[this.props.gameRoom.id];
                            let nextActive = members.indexOf(this.state.activeMemberId) + 1;
                            if (nextActive >= members.length) {
                                nextActive = 0;
                            }
                            this.setState({ activeMemberId: members[nextActive] })
                            console.log(members);
                            console.log(nextActive);
                            console.log(this.state.activeMemberId);
                        }
                        this.setState({ flippedKeys: [] });
                    }, 1000);
                }
            }
        });

        addMember(this.props.gameRoom.id);
        getMembers(data => {
            /* get all members */
            this.setState({ members: data });

            /* set initial points */
            for (let memberId of this.state.members[this.props.gameRoom.id]) {
                this.setState({ points: {...this.state.points, [memberId]: 0 } })
            }

            /* set current member */
            if (!this.state.memberId) {
                this.setState({ memberId: data[this.props.gameRoom.id][data[this.props.gameRoom.id].length-1] });
            }

            /* start if all members arrived */
            if (data[this.props.gameRoom.id].length === this.props.gameRoom.members) {
                this.setState({ started: true });
            }

            /* set active member id */
            this.setState({ activeMemberId: data[this.props.gameRoom.id][0] });
        });

        window.addEventListener('beforeunload', () => { removeMember(this.props.gameRoom.id) });
    }

    componentWillUnmount() {
        removeMember(this.props.gameRoom.id);
        window.removeEventListener('beforeunload', () => { removeMember(this.props.gameRoom.id) });
    }

    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    flipItem(index, key) {
        if (this.state.flippedKeys.length < 2
            && index !== this.state.flippedIndexes[this.state.flippedIndexes.length-1]
            && this.state.flippedIndexes.length !== this.state.items.length
            && this.state.started
            && this.state.memberId === this.state.activeMemberId) {

            setFlipped(
                this.props.gameRoom.id,
                [...this.state.flippedIndexes, index],
                [...this.state.flippedKeys, key]
            );
        }
    }

    render() {
        return (
            <div className="game-room">
                <h1>{this.props.gameRoom.name}</h1>
                <p dangerouslySetInnerHTML={{__html: this.props.gameRoom.info}} />
                { !this.state.started && <Alert color="warning">Waiting for players...</Alert>}
                <div className="players">
                    { this.state.members[this.props.gameRoom.id] && this.state.members[this.props.gameRoom.id].map((memberId, key, arr) => (
                        <div key={memberId} className={memberId === this.state.memberId ? "player active" : "player"}>
                            <h4>Player {key + 1}</h4>
                            <p>points: {this.state.points[memberId]}</p>
                        </div>
                    )) }
                </div>
                <div className={"arena " + Difficulties[this.props.gameRoom.difficulty]}>
                    { this.state.items && this.state.items.map((source, i) => {
                        return (
                            <div key={i} className={this.state.flippedIndexes && ~this.state.flippedIndexes.indexOf(i) ? 'item' : 'item flipped'} onClick={() => this.flipItem(i, source)}>
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
                <Modal isOpen={this.state.gameEnded} winner={this.state.winner} memberId={this.state.memberId} />
            </div>
        );
    }
}

MultiPlayer.propTypes = {
    gameRoom: PropTypes.object.isRequired,
    timeEnded: PropTypes.bool.isRequired,
    endGame: PropTypes.func.isRequired,
    increaseTime: PropTypes.func.isRequired
};

export default MultiPlayer;