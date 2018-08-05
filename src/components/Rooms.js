import React, { Component } from 'react';

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = { gameType: false };
        this.toggleGameType = this.toggleGameType.bind(this);
    }

    toggleGameType() {
        this.setState({ gameType: !this.state.gameType })
    }

    join() {
        console.log('joining room');
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
                        <tr className="room">
                            <td className="name">Alderaan</td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Coruscant</td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Dagobah</td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Dantooine</td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Dathomir</td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Florrum</td>
                            <td className="difficulty normal">Normal</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Geonosis</td>
                            <td className="difficulty normal">Normal</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Mandalore</td>
                            <td className="difficulty normal">Normal</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Mustafar</td>
                            <td className="difficulty difficult">Difficult</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Naboo</td>
                            <td className="difficulty difficult">Difficult</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Tatooine</td>
                            <td className="difficulty difficult">Difficult</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Yavin</td>
                            <td className="difficulty legendary">Legendary</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
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
                        <tr className="room">
                            <td className="name">Alderaan</td>
                            <td className="members">
                                <span className="fa fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Coruscant</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Dagobah</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Dantooine</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="fa fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Dathomir</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty easy">Easy</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Florrum</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="fa fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty normal">Normal</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Geonosis</td>
                            <td className="members">
                                <span className="fa fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty normal">Normal</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Mandalore</td>
                            <td className="members">
                                <span className="fa fa-user"></span>
                                <span className="fa fa-user"></span>
                                <span className="fa fa-user"></span>
                                <span className="fa fa-user"></span>
                            </td>
                            <td className="difficulty normal">Normal</td>
                            <td className="options" onClick={this.join}><i className="far fa-times-circle"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Mustafar</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty difficult">Difficult</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Naboo</td>
                            <td className="members">
                                <span className="fa fa-user"></span>
                                <span className="fa fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="fa fa-user"></span>
                            </td>
                            <td className="difficulty difficult">Difficult</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Tatooine</td>
                            <td className="members">
                                <span className="fa fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty difficult">Difficult</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        <tr className="room">
                            <td className="name">Yavin</td>
                            <td className="members">
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                                <span className="far fa-user"></span>
                            </td>
                            <td className="difficulty legendary">Legendary</td>
                            <td className="options" onClick={this.join}><i className="fas fa-sign-in-alt"></i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Rooms;