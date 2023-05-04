const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseCourse = require('./BaseCourse.model');
//to make sure termiccourse is aware of basecourse schema

const TermicCourseSchema = new Schema({
    classdate: {type: String},
    examdate: {type: Date},
    examlocation: {type: String},
    instructor: {type: String},
    Capacity: {type: Number},
    semester: {type: String},
});

const TermicCourse = BaseCourse.discriminator('TermicCourse', TermicCourseSchema);
module.exports = {TermicCourse};