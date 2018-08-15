import { INCREASE_TIME } from '../actions/types';

const initialState = { increase: 0 };

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_TIME:
            return {
                ...state,
                increase: action.payload
            };
        default:
            return state;
    }
};

export default gameReducer;