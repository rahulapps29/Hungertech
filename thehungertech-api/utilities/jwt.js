const constants = require('../constants'); 
const jwt = require('jsonwebtoken');
const jwt_secret = constants.JWT_SECRET
const token_expire_in = 60*60;  // 1 hour
const generateJwtToken = (payload) => {
    return jwt.sign(payload,jwt_secret,{expiresIn:token_expire_in})
}

const jwtAuthMiddleware = (req,res,next) => {
    const authorization = req.headers.authorization;
    if(!authorization){
        res.status(401).json({
            error:'Token Not Found'
        })
    }
    const token = authorization.split(' ')[1];
    if(!token){
        res.status(401).json({
            error:'Unauthorized access'
        })
    }
    try{
        const user = jwt.verify(token,jwt_secret);
        req.user = user;
        next();
    }
    catch(err){
        res.status(401).json({
            error:'Invalid Token'
        })
    }
}

module.exports = {generateJwtToken, jwtAuthMiddleware}
