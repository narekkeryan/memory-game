import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rooms from '../containers/Rooms';
import Game from '../containers/Game';
import styles from '../stylesheets/main.scss';

class App extends Component {
    render() {
        return ( <div className="app"> {this.props.gameStarted ? <Game /> : <Rooms />} </div> );
    }
}

App.propTypes = {
    gameStarted: PropTypes.bool.isRequired
};

export default App;