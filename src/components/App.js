import React, { Component } from 'react';
import Rooms from './Rooms';
import styles from '../stylesheets/main.scss';

class App extends Component {
    render() {
        return (
            <div className="app"><Rooms /></div>
        );
    }
}

export default App;