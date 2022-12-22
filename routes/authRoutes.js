const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {userValidation} = require('../validation');


//POST Request made by new user to register 
router.post('/register', async (req,res)=>{

    //checking for unique username
    const usernameExist = await User.findOne({username:req.body.username});
    if(usernameExist){
        res.status(400).send("Username already exist");
    };


    // validating the credentials of new user
    const {error} = userValidation(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
    };

    //if the username and password are valid we save the user in the db

    //hashing the password, data privacy we can not save the password as plain text into the  DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const newUser = new User({
            username : req.body.username,
            password : hashedPassword
    });

    try{
       const registeredUser = await newUser.save();
       res.json(registeredUser);

    }catch(err){
        res.json({message:err});
    }
})

//POST Request made by existing user to login
router.post('/login', async (req,res)=>{

    //checking for username
    const user = await User.findOne({username:req.body.username});
    console.log(user);
    if(!user){
        res.status(400).send("Username does not exist");
    };


    // checking password
   const validPassword = await bcrypt.compare(req.body.password,user.password);

   if(!validPassword){
    res.status(400).send("Incorrect Password");
   }

    //JWT AUTH: create and assign a token and seend into the header with jwt-auth key.
    const token = jwt.sign({_id : user._id},process.env.TokenSecret);
    res.header('jwt-auth',token).send(token);

   //res.send("Login Successful");

})



module.exports = router;