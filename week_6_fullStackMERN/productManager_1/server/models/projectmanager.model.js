const mongoose = require('mongoose');

const ProjectmanagerSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [ true, "You must have a name for your project manager!"],
    minlength: [ 1, "Your project manager name must be atleast 1 characters long" ],
  },
  // later on, we should make this an array
  Price: {
    type: String,
    required: [ true, "You are a project manager, give us your price!"],
  },
  Description: {
    type: String,
    required: [ true, "Give us your description so we can share it on the web!" ],
  },
},
{ timestamps: true });

const Projectmanager = mongoose.model("Projectmanager", ProjectmanagerSchema);

module.exports = Projectmanager;