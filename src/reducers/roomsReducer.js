import { FETCH_ROOMS } from '../actions/types';

const initialState = { rooms: [] };

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };
        default:
            return state;
    }
};

export default roomsReducer;