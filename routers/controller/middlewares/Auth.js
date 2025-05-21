const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try{
        const fullToken = req.headers.authorization
    const token = fullToken?.split(' ')[1]
    if(!token){
           return res.status(403).send({message:"Access Denied"})
    }
    const decoded = jwt.verify(token,'secretKey')
        req.user = decoded
        next()
    

    }catch(err){
        res.status(400).send({message:"Invalid token"})
    }
}