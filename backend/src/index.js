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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

module.exports = app;