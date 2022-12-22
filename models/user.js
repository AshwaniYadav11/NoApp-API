const mongoose = require('mongoose');
//defing the schema of the user profile
const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: true},

   password : {
        type: String,
        required: true},
});

module.exports = mongoose.model('User',UserSchema);