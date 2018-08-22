import { START_GAME, END_GAME } from './types';

export const startGame = (room, isMultiPlayer = false) => ({
    type: START_GAME,
    payload: {
        room,
        isMultiPlayer
    }
});

export const endGame = () => ({
    type: END_GAME
});