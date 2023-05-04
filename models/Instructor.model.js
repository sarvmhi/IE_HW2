const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseUser = require('./BaseUser.model');
//to make sure studentschema is aware of baseuser schema

const InstructorSchema = new Schema({
    faculty: { type: String, required: true },
    major: { type: String, required: true },
    academicrank: { type: String, required: true },
    });

const InstructorUser = BaseUser.discriminator('Instructor', InstructorSchema);

module.exports = {InstructorUser};