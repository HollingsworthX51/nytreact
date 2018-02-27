
// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
// express
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//mongoose.connect(
  //process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  //{
    //useMongoClient: true
  //}
//);

if(process.env.NODE_ENV == 'production'){
	mongoose.connect('mongodb://heroku_l4lvcz4d:543klnr053gfu9sl2v919tons2@ds019866.mlab.com:19866/heroku_l4lvcz4d');
}
else{
	mongoose.connect("mongodb://localhost/reactroute");
}


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});