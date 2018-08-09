import { connect } from 'react-redux';
import { startGame } from '../actions/roomsActions';
import Rooms from '../components/Rooms';

const mapStateToProps = state => ({
    gameStarted: state.rooms.gameStarted
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(startGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);