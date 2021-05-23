const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mongoose config setup
// this is the equivalent of running the code from that file right here!
require('./config/mongoose.config');

// routes setup
// import what was exported, and then invoke that function with app as the argument
//    to the returned / imported / required function
require('./routes/projectmanager.routes')(app);

app.listen(port, () => console.log("your server is running for super-hero data!"));