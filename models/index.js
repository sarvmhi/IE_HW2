// to connect to the database and load models 
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// const db = {}; is for creating an object that will contain all our models
const db = {};
// db.mongoose = mongoose; is for using the mongoose package
db.mongoose = mongoose;
// db.url = dbConfig.url; is for connecting to the database
db.url = dbConfig.url;


// db.users = require("./user.BaseCourse.js")(mongoose); is for loading the BaseCourse model
db.BaseCourse = require("./BaseCourse.model.js")(mongoose)
db.BaseUser.model.js = require("./BaseUser.model.js")(mongoose);
db.EducatanionalManager.model.js = require("./EducatanionalManager.model.js")(mongoose);
db.Instructor.model.js = require("./Instructor.model.js")(mongoose);
db.ITManager.model.js = require("./ITManager.model.js")(mongoose);
db.Student.model.js = require("./Student.model.js")(mongoose);
db.TermicCourse.model.js = require("./TermicCourse.model.js")(mongoose);

// module.exports = db; is for exporting the db object
module.exports = db;

