import ServerRoutes from '../constants/ServerRoutes';
import { FETCH_ROOMS, START_GAME } from './types';

export const fetchRooms = () => dispatch => {
    fetch(ServerRoutes.ROOMS)
        .then(response => response.json())
        .then(responseJson => dispatch({
            type: FETCH_ROOMS,
            payload: responseJson
        }))
        .catch(error => console.error(error));
};

export const startGame = () => ({
    type: START_GAME,
    payload: true
});