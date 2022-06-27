const User = require("../model/User");
const bcrypt = require('bcrypt');
const generateToken = require('../config/authToken')
// import mongoose from "mongoose";
const asyncHandler = require('express-async-handler')

// register //

const registration = asyncHandler(async(req,res) =>{

    const {username,email,password} = req.body;

    if(!username || !email || !password)
    {
        return res.status(401).json("Please enter all  field");
    } 
    const userExist = await User.findOne({username:username});
    
    const emailExist = await User.findOne({email:email})

    try {
         if(userExist)
        {
            return res.status(400).json("Username Exists");
        }
    else  if(emailExist)
    {
        return res.status(400).json("Email Exists");
    }
  
          const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:username,
            email:email,
            password:hashPassword
        })

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
           
    }

})

// login //

const login =asyncHandler(async(req,res)=>{
    const {username} = req.body;
    console.log(username);
    try {
        if(!username || !req.body.password )
        {
            return res.status(402).json("Please all field")
        }
        const user = await User.findOne({username:username});

        console.log(user);
        const validate = await bcrypt.compare(req.body.password,user.password)
        if(!validate)
        { 
            return res.status(402).json("Invalid password")
        }
       const { password, ...others } = user._doc;

       res.status(200).json({others , token : generateToken(user.id)});
    } catch (error) {
        res.status(501).json(error)
       console.log(error);
    }
})
 


module.exports = {
	registration,
    login
};