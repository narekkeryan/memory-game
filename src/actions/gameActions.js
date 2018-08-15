import { INCREASE_TIME } from './types';

export const increaseTime = (seconds) => ({
    type: INCREASE_TIME,
    payload: seconds
});