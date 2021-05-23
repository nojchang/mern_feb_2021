const mongoose = require('mongoose');
const db_name = 'project-manager';

mongoose.connect('mongodb://localhost/' + db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("You are connected to the " + db_name + " database!  PROJECT MANAGER!!!"))
  .catch((err) => console.log("Found an error connecting to the database.  Where is my project manager!"));
