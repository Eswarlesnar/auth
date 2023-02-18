const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : {
        type : String , 
        required : [true , "please provide email"],
        unique : [true , "email already exists"]
    } , 
    password : {
        type : String , 
        required : [true , "please provide a password"]
    },
    username : {
        type : String , 
        required : true
    }
})

module.exports = mongoose.model("Users", userSchema)