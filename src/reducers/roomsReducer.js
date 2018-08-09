import { FETCH_ROOMS, START_GAME } from '../actions/types';

const initialState = { rooms: [], gameStarted: false };

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };
        case START_GAME:
            return {
                ...state,
                gameStarted: action.payload
            };
        default:
            return state;
    }
};

export default roomsReducer;