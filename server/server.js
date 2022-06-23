const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.port || 4000;

const databaseURL = "mongodb+srv://database_admin:abEnMsUmxn76QyWi@cluster0.jjjhf.mongodb.net/placement-system?retryWrites=true&w=majority";

mongoose.connect(databaseURL)
.then(()=>{
  console.log("Connected To DB");
  app.listen(port);
})
.catch((error)=>{console.log(error)});

const users = require("./routes/users");

app.use(express.json()); // parses json to request.body 

app.use("/users",users);

