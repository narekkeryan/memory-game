import { START_GAME, END_GAME } from './types';

export const startGame = (room) => ({
    type: START_GAME,
    payload: room
});

export const endGame = () => ({
    type: END_GAME
});