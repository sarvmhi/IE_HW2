const db = require("../models");
const course = db.course;

/*
create
findAll
findOne
update
delete
deleteAll
findAllPublished

*/

// Create and Save a new course
exports.create = (req, res) => {
  
};

// Retrieve all courses from the database.
exports.findAll = (req, res) => {
  
};

// Find a single course with an id
exports.findOne = (req, res) => {
  
};

// Update a course by the id in the request
exports.update = (req, res) => {
  
};

// Delete a course with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all courses from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published courses
exports.findAllPublished = (req, res) => {
  
};


exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a course
    const course = new course({
      title: req.body.title,
      prerequisite: req.body.prerequisite,
      corequisite: req.body.corequisite,
      credit: req.body.credit,
    });

     // Save course in the database
  cou
  .save(course)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the course."
    });
  });
};



