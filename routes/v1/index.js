'use strict';

const express = require('express');
const roomsRouter = require('./rooms');

const router = express.Router();

router.use('/rooms', roomsRouter);

module.exports = router;