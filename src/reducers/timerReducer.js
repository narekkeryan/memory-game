import { END_TIME, END_GAME } from '../actions/types';

const initialState = { timeEnded: false };

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case END_TIME:
            return {
                ...state,
                timeEnded: true
            };
        case END_GAME:
            return {
                ...state,
                timeEnded: false
            };
        default:
            return state;
    }
};

export default timerReducer;