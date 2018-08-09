import { START_GAME } from './types';

export const startGame = () => {
    return {
        type: 'START_GAME',
        payload: true
    };
};