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
