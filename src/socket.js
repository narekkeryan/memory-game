import openSocket from 'socket.io-client';
import { PROXY_URL } from './constants/ServerRoutes';

const socket = openSocket(PROXY_URL);

export const addMember = room => {
    socket.emit('ADD_MEMBER', room);
};

export const requestMembers = () => {
    socket.emit('REQUEST_MEMBERS', true);
};

export const removeMember = room => {
    socket.emit('REMOVE_MEMBER', room);
};

export const getMembers = cb => {
    socket.on('GET_MEMBERS', data => cb(data));
};

export const setItems = (room, items) => {
    socket.emit('SET_ITEMS', { room, items });
};

export const getItems = cb => {
    socket.on('GET_ITEMS', items => cb(items));
};

export const setFlipped = (room, flippedIndexes, flippedKeys) => {
    socket.emit('SET_FLIPPED', { room, flippedIndexes, flippedKeys });
};

export const getFlipped = cb => {
    socket.on('GET_FLIPPED', flipped => cb(flipped));
};