const express = require("express")
const bcrypt = require("bcrypt")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const dbConnection = require("./db/dbConnection")
const Users = require("./db/userSchema")
const auth = require("./auth")
const app = express()


dbConnection()
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});


app.post("/register" , (request , response) => { 
    bcrypt.hash(request.body.password , 10).then((hashedPassword) => {
       const user = new Users({
         email : request.body.email , 
         password  :hashedPassword , 
         username : request.body.username
       })
       user.save().then((result) => {
         response.status(201).send({
           message : "User created succcessfully",
           result
         })
       }).catch((error) => {
         if(error.keyPattern.email === 1){
            response.status(400).send({
              message : "Email is already taken",
              error
            })
         }else{
          response.status(400).send({
            message : "Failed to register the user",
            error
          })
         }
         
       })
    }).catch( (error) => {
      console.log("password was not hashed succcessfully")
      console.log(error)
    })
 })
 
 app.post("/login" , (request , response) => {
    Users.findOne({email : request.body.email})
    .then((user) => {
       bcrypt.compare(request.body.password , user.password)
       .then((passwordMatched) => {
           if(!passwordMatched){
             return response.statu(400).send({
               message : 'password is wrong'
             })
           }
 
           token = jwt.sign(
             {
               userid : user._id,
               userEmai : user.email
             },
             "Random Token",
             {
               expiresIn : "24h"
             }
           )
           response.status(200).send({
             message : "login successful",
             email : user.email,
             token
           })
       })
 
    }).catch(error => {
      response.status(404).send({
        message : "Email not found", 
        error
      })
    }) 
 })


 // global endpoint
app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
  });
  
  // private  endpoint
  app.get("/auth-endpoint", auth ,(request, response) => {
    response.json({ message: "You are authorized to access me" });
  });
  
 


module.exports = app