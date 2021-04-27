const express = require('express');
const verifier = require('firebase-token-verifier');
const AWS = require('aws-sdk');
//change
const USERS_TABLE = "interviews";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

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

routes.post('/test', function (req, res) {

    if (!req.header("Authorization")){
        res.status(401).json({});
    } else{
        verifier.validate(req.header("Authorization"),"interviews-4b797",(err,validated)=>{
            if (err) {
                res.status(401).json({});
            } else {
                var params = {
                    TableName:USERS_TABLE,
                    Item:{
                        "userId": req.body.token,
                        "interviewId": String(Math.floor(Math.random() * 1000000)),
                        "who":req.body.who,
                        "web":req.body.web,
                        "calendar":req.body.calendar
                    }
                };
                dynamoDb.put(params, function(err, data) {
                    if (err) {
                        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                        res.status(401).json({});
                    } else {
                        console.log("Added item:", JSON.stringify(data, null, 2));
                        res.status(201).json({});
                    }
                });
            }
        })
    }


})

routes.get('/test', function (req, res) {

    if (!req.header("Authorization")){
        res.status(401).json({});
    } else{
        verifier.validate(req.header("Authorization"),"interviews-4b797",(err,validated)=>{
            if (err) {
                res.status(401).json({});
            } else {
                var params = {
                    TableName : USERS_TABLE,
                    KeyConditionExpression: "userId = :idz",
                    ExpressionAttributeValues: {
                        ":idz": req.header("Authorization")
                    }
                };
            
                dynamoDb.query(params, (error, result) => {
                    if (error) {
                    console.log(error);
                    res.status(400).json({ error2: 'Could not get user' });
                    }
                    console.log(result.Items)
                    res.status(201).json({"meetings":result.Items});

                });
            }
        })
    }


})

module.exports = {
    routes,
};