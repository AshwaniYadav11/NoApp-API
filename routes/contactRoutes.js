const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const csvtojson = require('csvtojson');
const {contactValidation} = require('../validation');
const {JWTAuthentication} = require('./JWTVerification')


//GET Request : a valid user trying to hit this route result in acccessing the whole DB that is it returns all the contact profile in the DB.
router.get('/',JWTAuthentication,async (req,res)=>{
try{

    const savedContacts = await Contact.find();
    res.json(savedContacts);

}catch(err){
    res.json({message: err});
}
});

// Debug Route
router.get('/xyz',(req,res)=>{
    res.send('on contact routes xyz');
    });
    
//POST Request:  a valid user trying to hit this route can save all the contact profiles in the contactsss csv file into the db at one go.
router.post('/',JWTAuthentication, async (req, res) => {

    csvtojson().
    fromFile("contactsss.csv")
    .then(dataCsv=>{
        console.log(dataCsv);
        Contact.insertMany(dataCsv).then( function(){
            res.send("Data Inserted Successfully");

        }).catch( function(error){
            res.json(message , error);
        });
    });

    //This piece of code insert a single contact profile in the DB after validating the fields
    //i.e email, phone number etc, sililar stuff can be implemeted for multiple enterires as well.

/*     //validating the parameters of the new contact entry
    const {error} = contactValidation(req.body);

    if(error){res.status(400).send(error.details[0].message);}

    //If valid contact we save the contact check for unique enteries later
    const contact = new Contact({

        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        linkedin: req.body.email
    });

    try{
        const savedData = await contact.save();
        res.json(savedData);
       // console.log(savedData);
    }catch(err){
        res.json({message:err});
    } */
    
  });

module.exports = router;