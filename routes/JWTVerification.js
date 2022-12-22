const jwt = require('jsonwebtoken');

//this function is called in order to validates a JWT Token.
function JWTAuthentication(req,res,next){

    //token extracted from the header
    const token = req.header('jwt-auth');

    if(!token)(res.status(401).send("Access Denied"));

    try{
        //validating the token.
        const verified = jwt.verify(token,process.env.TokenSecret);
        //user verified
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send("Invalid Token");
    }

}
module.exports.JWTAuthentication = JWTAuthentication;