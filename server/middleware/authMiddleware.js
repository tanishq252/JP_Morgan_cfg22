const jwt = require('jsonwebtoken');

const User = require("../model/User");

const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req,res,next) =>{
    let token;
    if( 
        req.headers.authorization 
        && req.headers.authorization.startsWith('Bearer') 
    ){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,process.env.JWT_KEY);
            req.user = await User.findById(decoded.id).select("-password");
            next();
            
        } catch (error) {
            res.status(401).json(error);
        }
       
    }
   if(!token)
    {
        res.status(404).json("not authorized as no token was passed")
    }
   
})

module.exports = {protect}