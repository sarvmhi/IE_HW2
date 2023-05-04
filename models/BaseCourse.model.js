const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//BaseCourse is the Parent schema of all types of courses

const BaseCourseSchema = new Schema({

          title: { type: String, required: true },
          prerequisite: { type: String},
          corequisite: {type: String},
          credit: { type: Number, required: true, min: 0, max: 3 },

},
  BaseOption
);


const BaseOption = {
    discriminatorKey: 'kind', // with this key we can store different entities in the same collection
    collection: 'course',// the name of our collection
};

module.exports.BaseCourseSchema = mongoose.model('BaseCourse', BaseCourseSchema);
