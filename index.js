const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config')

const parseToJson = bodyParser.json();

//IMPORT ROUTES
const contactRoute = require('./routes/contactRoutes');
const authenticationRoute = require('./routes/authRoutes');

//MIDDLEWARES
app.use('/',parseToJson);
//routes directed to /contacts for contact csv upload and viwe the contacts in the DB
app.use('/contacts',contactRoute);
//routes directed to /auth for user register and login, i.e validation of the user in order to access the private API
app.use('/auth',authenticationRoute);

//LISTENING PORT NUMBER
app.listen(3000);

//Connecting to the DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DbConnectionString, console.log('Connected to mongo DB'));
