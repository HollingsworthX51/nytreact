
//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

//imports
mongoose.Promise = Promise;
const PORT = process.env.PORT || 3000;
const article = require("./models/Articles.js");
const controller = require("./controllers/controllers.js");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/nytreact");
const db = mongoose.connection;

//Error message - mongoose connection 
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Success message - mongoose connection
db.once("open", function() {
  console.log("Mongoose connection successful!");
});

// React
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


//get route
app.get("/api/saved", function(req, res) {
  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

//post
app.post("/api/saved", function(req, res) {

  const newArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });

//save
newArticle.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});


//delete
app.delete('/api/saved/:id', function(req, res){

  Article.find({'_id': req.params.id}).remove()
    .exec(function(err, doc) {
      res.send(doc);
  });

});

app.listen(PORT, function() {
  console.log("App running on port 3000!");
});