// Charles Goodwin/node express app for matiching individuals or items by similar answers to questions

// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Express config
// Sets up the Express App
// =============================================================

var app = express();

// Set port for listening
var PORT = process.env.PORT || 3000;

// Set Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// htmlRoutes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/match", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


// apiRoutes


//Create New Characters - takes in JSON input

app.post("/api/candidates", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newCandidate = req.body;

  candidates.push(newCandidate);

  res.json(newcharacter);
});

app.post("/api/employers", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newEmployer = req.body;

  newEmployer.routeName = newEmployer.name.replace(/\s+/g, "").toLowerCase();

  candidates.push(newEmployer);

  res.json(newEmployer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});