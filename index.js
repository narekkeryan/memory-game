'use strict';

const express = require('express');
const app = express();

const path = require('path');
const v1Routes = require('./routes/v1');

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'dist/index.html')) });
app.use('/v1', v1Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening to ${PORT}!`));