const Projectmanager = require('../models/projectmanager.model');

module.exports = {
  // get ALL projectmanager docs from Mongo
  getAll: (req, res) => {
    Projectmanager.find( { } )
      .then((allProjectmanager) => {
        console.log("In getAll");
        res.json(allProjectmanager);
      })
      .catch((err) => {
        console.log("Error in getAll");
        res.status(500).json(err);
      })
  },
  // get one Projectmanager document
  getOne: (req, res) => {
    console.log("getOne ID: " + req.params.id);
    Projectmanager.findById(req.params.id)
      .then((oneProjectmanager) => {
        console.log("In GetOne");
        res.json(oneProjectmanager);
      })
      .catch((err) => {
        console.log("Error in getOne");
        res.status(500).json(err);
      })
  },
  // create a Projectmanager document
  create: (req, res) => {
    console.log(req.body);  // this will print the json object we want to add to the DB
    Projectmanager.create(req.body)
      .then((newProjectmanager) => {
        console.log("In Create");
        res.json(newProjectmanager);
      })
      .catch((err) => {
        console.log("Error in create");
        res.status(500).json(err);
      })
  },

  // update a Projectmanager document
  // almost identical to the Create
  update: (req, res) => {
    console.log(req.body);  // this will print the json object we want to add to the DB
    Projectmanager.findByIdAndUpdate(req.params.id, req.body, {
      new: true,            // by default mongoose will return the object as it was BEFORE you updated it
      runValidators: true,  // by default Mongoose models do NOT validate data on updates
    })
      .then((updatedProjectmanager) => {
        console.log("In Update");
        res.json(updatedProjectmanager);
      })
      .catch((err) => {
        console.log("Error in update");
        res.status(500).json(err);
      })

  },
  // delete a Projectmanager document
  delete: (req, res) => {
    console.log("delete ID: " + req.params.id);
    Projectmanager.findByIdAndDelete(req.params.id)
      .then((deletedProjectmanager) => {
        console.log("In Delete");
        res.json(deletedProjectmanager);
      })
      .catch((err) => {
        console.log("Error in delete");
        res.status(500).json(err);
      });
  }

}
