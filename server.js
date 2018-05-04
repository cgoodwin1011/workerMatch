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
  console.log("getting survery")
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// apiRoutes
// Displays all candidates
// app.get("/api/candidates", function(req, res) {
//   return res.json(candidates);
// });

// Displays a single character, or returns false
app.get("/api/candidates/:candidate", function(req, res) {
  var chosen = req.params.candidate;

  console.log(chosen);

  for (var i = 0; i < candidates.length; i++) {
    if (chosen === candidates[i].routeName) {
      return res.json(candidates[i]);
    }
  }

  return res.json(false);
});

// // Create New Characters - takes in JSON input
// app.post("/api/candidates", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newCandidate = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCandidate);

//   candidates.push(newCandidate);

//   res.json(newcharacter);
// });

app.post("/api/candidates", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newCandidate = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCandidate);

  candidates.push(newCandidate);

  res.json(newcharacter);
});

app.post("/api/employers", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newEmployer = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newEmployer.routeName = newEmployer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newEmployer);

  candidates.push(newEmployer);

  res.json(newEmployer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});