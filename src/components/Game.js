import React, { Component } from 'react';
import SinglePlayer from './SinglePlayer';
import MultiPlayer from './MultiPlayer';

class Game extends Component {
    render() {
        return (
            <div className="app-game">{this.props.isMultiPlayer ? <MultiPlayer {...this.props} /> : <SinglePlayer {...this.props} />}</div>
        );
    }
}

export default Game;