import { connect } from 'react-redux';
import { endGame } from '../actions/appActions';
import { increaseTime } from '../actions/gameActions';
import Game from '../components/Game';

const mapStateToProps = state => ({
    gameRoom: state.app.gameRoom,
    isMultiPlayer: state.app.isMultiPlayer,
    timeEnded: state.timer.timeEnded
});

const mapDispatchToProps = dispatch => ({
    endGame: () => dispatch(endGame()),
    increaseTime: (seconds) => dispatch(increaseTime(seconds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);