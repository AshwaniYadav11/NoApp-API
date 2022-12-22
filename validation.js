const joi = require('@hapi/joi');
const { model } = require('mongoose');

//These function act as the parameter validation function for the enteries made into the DB
//We can add further coinstraint to the parameter as per our needs and requirement this is for prototype purpose.

const userValidation=(data)=>{

    const schema = joi.object({

        username : joi.string().min(5).required(),
        password : joi.string().min(8).required()
    })

    return schema.validate(data);

};

module.exports.userValidation = userValidation;

const contactValidation=(data)=>{

    const schema = joi.object( {

        name : joi.string().required(),
        phone : joi.string().required(),
        email: joi.string().email().required(),
        linkedin: joi.string().required()
    })

    return schema.validate(data);

};


module.exports.contactValidation = contactValidation;