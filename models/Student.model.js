const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseUser = require('./BaseUser.model');
//to make sure studentschema is aware of baseuser schema

const StudentSchema = new Schema({
    grade: { type: String, required: true },
    entryyear: { type: Number, required: true },
    semester: { type: Number, required: true },
    gpa: { type: Number, required: true , min: 0, max: 20},
    faculty: { type: String, required: true },
    major: { type: String, required: true },
    });

const StudentUser = BaseUser.discriminator('Student', StudentSchema);

module.exports = {StudentUser};