const express = require('express');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json({"ref_code":"1234","count":2});
});

module.exports = {
    routes,
};