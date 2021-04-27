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

routes.get('/test', function (req, res) {
      const params = {
        TableName: USERS_TABLE,
        Key: {
            interviewId: "test",
            userId:"usertest"
        },
      }
    
      dynamoDb.get(params, (error, result) => {
        if (error) {
          console.log(error);
          res.status(400).json({ error: 'Could not get user' });
        }
        if (result.Item) {
          const {userId, name} = result.Item;
          res.json({ userId, name });
        } else {
     res.status(404).json({ error: "User not found" });
   }
    });
})


module.exports = {
    routes,
};