const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseUser = require('./BaseUser.model');
//to make sure studentschema is aware of baseuser schema

const EducationalManagerSchema = new Schema({
    faculty: { type: String, required: true },
    });

const EducationalManagertorUser = BaseUser.discriminator('EducationalManager', EducationalManagerSchema);

module.exports = {EducationalManagertorUser};