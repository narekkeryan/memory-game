import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
    gameStarted: state.app.gameStarted
});

export default connect(mapStateToProps)(App);