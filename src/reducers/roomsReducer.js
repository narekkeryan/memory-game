import { START_GAME } from '../actions/types';

const initialState = { gameStarted: false };

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
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