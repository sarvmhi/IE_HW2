const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//BaseUser is the Parent schema of all types of users

const BaseUserSchema = new Schema({

    firstname: {type : String, required: true},
    lastname: {type : String, required: true},
    password: {type : String, required: true, trim: true},
    email: {type : String, required: true, trim: true, unique: true},
    phonenumber: {type: Number, required: true, trim: true},  
},
  BaseOption
);

//trim: true means that the whitespace will be trimmed off the end of the string
//unique: true means that the email address must be unique in the database

const BaseOption = {
    discriminatorKey: 'kind', // with this key we can store different entities in the same collection
    collection: 'user',// the name of our collection
};

module.exports.BaseUserSchema = mongoose.model('BaseUser', BaseUserSchema);



 