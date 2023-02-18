const mongoose = require("mongoose")

require("dotenv").config()

async function dbConnection() {
    mongoose.set("strictQuery" , false)
    mongoose.connect(process.env.DB_URL , {
        useNewUrlParser : true , 
    }).then(() => {
        console.log("successfully connected to mongodb")
    }).catch( (error) => {
        console.log("failed connection to the database")
        console.log(error)
    })
}

module.exports = dbConnection   