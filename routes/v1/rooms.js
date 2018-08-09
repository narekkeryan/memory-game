'use strict';

const express = require('express');
const RoomsController = require('../../controllers/RoomsController');

const router = express.Router();

router.get('/', RoomsController.actionGetRooms);

module.exports = router;