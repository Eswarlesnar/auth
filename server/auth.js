
const jwt = require("jsonwebtoken")


const auth =async (request , response , next) => {
    try{
        const token = await request.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token ,"Random Token")
        const user = await decodedToken
        request.user = user
        next()
    }catch{
        response.status(401).json({
            error : new Error("Invalid request!")
        })
    }
}

module.exports = auth