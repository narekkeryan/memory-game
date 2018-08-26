import { START_GAME, END_GAME } from '../actions/types';

const initialState = { gameStarted: false, gameRoom: {}, isMultiPlayer: false };

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                gameStarted: true,
                gameRoom: action.payload.room,
                isMultiPlayer: action.payload.isMultiPlayer
            };
        case END_GAME:
            return {
                ...state,
                gameStarted: false
            };
        default:
            return state;
    }
};

export default roomsReducer;