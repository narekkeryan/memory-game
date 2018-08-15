import { combineReducers } from 'redux';
import appReducer from './appReducer';
import roomsReducer from './roomsReducer';
import timerReducer from './timerReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    app: appReducer,
    rooms: roomsReducer,
    timer: timerReducer,
    game: gameReducer
});