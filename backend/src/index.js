const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    routes: refRoutes,
} = require('./ref/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/ref', refRoutes);

module.exports = app;