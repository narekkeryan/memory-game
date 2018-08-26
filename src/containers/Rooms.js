import { connect } from 'react-redux';
import { fetchRooms } from '../actions/roomsActions';
import { startGame, endGame } from '../actions/appActions';
import Rooms from '../components/Rooms';

const mapStateToProps = state => ({
    rooms: state.rooms.rooms
});

const mapDispatchToProps = dispatch => ({
    fetchRooms: () => dispatch(fetchRooms()),
    startGame: (room, isMultiPlayer) => dispatch(startGame(room, isMultiPlayer)),
    endGame: () => dispatch(endGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);