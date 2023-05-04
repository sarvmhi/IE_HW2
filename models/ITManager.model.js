const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseUser = require('./BaseUser.model');
//to make sure studentschema is aware of baseuser schema

const ITManagerSchema = new Schema({
    faculty: { type: String, required: true },
    });

const ITManagerUser = BaseUser.discriminator('ITManager', ITManagerSchema);

module.exports = {ITManagerUser};