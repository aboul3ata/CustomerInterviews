const express = require('express');
const verifier = require('firebase-token-verifier');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    if (!req.header("Authorization")){
        res.status(401).json({});
    } else{
        verifier.validate(req.header("Authorization"),"interviews-4b797",(err,validated)=>{
            if (err) {
                res.status(401).json({});
            } else {
                res.status(200).json({"ref_code":"1234","count":4});
            }
        })
    }
    // res.status(200).json({"ref_code":"1234","count":4});

});

module.exports = {
    routes,
};