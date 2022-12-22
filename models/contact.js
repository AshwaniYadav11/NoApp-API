const mongoose = require('mongoose');
//Defining the schema of the contact profiles
const ContactSchema = mongoose.Schema({

    name: {
        type: String,
        required: true},

   phone : {
        type: String,
        required: true},
    
    email : {
        type: String,
        required: true},
    
    linkedin : {
        type: String,
        required: true}
});

module.exports = mongoose.model('Contact',ContactSchema);