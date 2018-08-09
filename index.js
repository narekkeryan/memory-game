'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
const v1Routes = require('./routes/v1')

app.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}));
app.use('/v1', v1Routes);

app.listen(5000, console.log('Listening to 5000!'));