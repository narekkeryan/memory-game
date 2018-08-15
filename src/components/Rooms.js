import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Difficulties from '../constants/Difficulties';

class Rooms extends Component {
    constructor(props) {
        super(props);

        this.state = { gameType: false};

        this.toggleGameType = this.toggleGameType.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    componentWillMount() {
        this.props.fetchRooms();
    }

    toggleGameType() {
        this.setState({ gameType: !this.state.gameType })
    }

    startGame(room) {
        if (!this.state.gameType || room.members != room.occupied) {
            this.props.startGame(room);
        }
    }

    render() {
        return (
            <div className="rooms-area">
                <div className="game-types">
                    <div className={!this.state.gameType ? 'game-type active': 'game-type'} onClick={this.toggleGameType}>Singular</div>
                    <div className={this.state.gameType ? 'game-type active': 'game-type'} onClick={this.toggleGameType}>Multiplayer</div>
                </div>
                <div className="rooms">
                    <table className={!this.state.gameType ? 'table singular-rooms active': 'table singular-rooms'}>
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Difficulty</th>
                                <th>Join</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.rooms && this.props.rooms.map((room, key) => (
                                <tr key={key} className="room">
                                    <td className="name">{room.name}</td>
                                    <td className={'difficulty ' + Difficulties[room.difficulty]}>{Difficulties[room.difficulty]}</td>
                                    <td className="options" onClick={() => this.startGame(room)}><i className="fas fa-sign-in-alt"></i></td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                    <table className={this.state.gameType ? 'table multiple-rooms active': 'table multiple-rooms'}>
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Members</th>
                                <th>Difficulty</th>
                                <th>Join</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.rooms && this.props.rooms.map((room, key) => (
                                <tr key={key} className="room">
                                    <td className="name">{room.name}</td>
                                    <td className="members">
                                        { [...new Array(room.members).keys()].map((member, id) => (
                                            <span key={id} className={room.occupied > id ? "fa fa-user" : "far fa-user"}></span>
                                        )) }
                                    </td>
                                    <td className={'difficulty ' + Difficulties[room.difficulty]}>{Difficulties[room.difficulty]}</td>
                                    <td className="options" onClick={room.members - room.occupied ? this.startGame : null}>
                                        <i className={room.members - room.occupied ? "fas fa-sign-in-alt" : "far fa-times-circle"}></i>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Rooms.propTypes = {
    fetchRooms: PropTypes.func.isRequired,
    rooms: PropTypes.array.isRequired,
    startGame: PropTypes.func.isRequired,
    endGame: PropTypes.func.isRequired
};

export default Rooms;