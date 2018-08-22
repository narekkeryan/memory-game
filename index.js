'use strict';

const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');
const v1Routes = require('./routes/v1');

const app = express();
const server = http.Server(app);
const io = socket(server);
const PORT = 5000;

let members = new Array(12).fill([]);

io.on('connection', socket => {
    socket.on('REQUEST_MEMBERS', () => {
        io.emit('GET_MEMBERS', members);
    });
    socket.on('ADD_MEMBER', data => {
        members[data] = [...members[data], socket.id];
        io.emit('GET_MEMBERS', members);
    });
    socket.on('REMOVE_MEMBER', data => {
        if (members[data].indexOf(socket.id)) {
            members[data].splice(members[data].indexOf(socket.id), 1);
        }
        io.emit('GET_MEMBERS', members);
    });
});

app.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}));
app.use('/v1', v1Routes);

server.listen(PORT, console.log(`Listening to ${PORT}!`));