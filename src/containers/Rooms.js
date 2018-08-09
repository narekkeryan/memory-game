import { connect } from 'react-redux';
import { fetchRooms, startGame } from '../actions/roomsActions';
import Rooms from '../components/Rooms';

const mapStateToProps = state => ({
    rooms: state.rooms.rooms,
    gameStarted: state.rooms.gameStarted
});

const mapDispatchToProps = dispatch => ({
    fetchRooms: () => dispatch(fetchRooms()),
    onClick: () => dispatch(startGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);