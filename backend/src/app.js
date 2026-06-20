const express = require('express');

const app = express();

app.use(express.json());

const cardRoutes = require('./route/cardRoute');
const setRoutes = require('./route/setRoute');
const tcgRoutes = require('./route/tcgRoute');

app.use('/cards', cardRoutes);
app.use('/sets', setRoutes);
app.use('/tcgs', tcgRoutes)

module.exports = app;