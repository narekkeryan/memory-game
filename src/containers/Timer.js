import { connect } from 'react-redux';
import { endTime } from '../actions/timerActions';
import { increaseTime } from '../actions/gameActions';
import Timer from '../components/Timer';

const mapStateToProps = state => ({
    increase: state.game.increase
});

const mapDispatchToProps = dispatch => ({
    endTime: () => dispatch(endTime()),
    increaseTime: (seconds) => dispatch(increaseTime(seconds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);