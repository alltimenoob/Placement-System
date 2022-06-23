const express = require("express");
const Users = require("../models/UsersModel");
const usersModel = require("../models/UsersModel");

let router = express.Router();

router.route("/all").get(function(req,res){
    
    usersModel.find().then((result)=>{
        res.send("result");
    });
 
}).post(function(req,res){

    res.send(req.body);  //json read

});

router.route("/add").get(function(req,res){
    
    const name = req.query.name;
    const email = req.query.email;

    const user = new Users({
        name: name,
        email : email
    });

    usersModel.find({"email": email}).then((result)=>{
        if(result.length==0) 
        {
            user.save().then(()=>{
                res.send(`The user(${name}) is saved by placement valley 🥳 `);
            }).catch(()=>{
                res.send(`The user(${name}) could not be saved by placement valley 😓`);
            });
        }
        else
        {
            res.send(`The user(${name}) is already saved by placement valley 🙂`);
        }
    }).catch((error)=>{
        res.send(error);
    });

});

module.exports = router;