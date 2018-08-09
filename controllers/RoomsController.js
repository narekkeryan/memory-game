'use strict';
const fs = require('fs-extra');
const path = require('path');

class RoomsController {
    static async actionGetRooms(req, res) {
        const rooms = await fs.readFile(path.join(__dirname, '../database/rooms.json'));
        res.json(JSON.parse(rooms));
    }
}

module.exports = RoomsController;