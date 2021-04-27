const express = require('express');
const verifier = require('firebase-token-verifier');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    if (!req.header("token")){
        res.status(401).json({});
    } else{
        verifier.validate(req.header("token"),"interviews-4b797",(err,validated)=>{
            if (err) {
                res.status(401).json({});
            } else {
                res.status(200).json({"ref_code":"1234","count":4});
            }
        })
    }

});

module.exports = {
    routes,
};