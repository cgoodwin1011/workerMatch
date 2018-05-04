// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var candidates = require("../data/candidates");
var employers = require("../data/employers");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/employers", function(req, res) {
    res.json(employers);
  });

  app.get("/api/candidates", function(req, res) {
    res.json(candidates);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/candidates", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      console.log("adding candidate");
      candidates.push(req.body);
      res.json(true);
    }
  );

  app.post("/api/employers", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      employers.push(req.body);
      res.json(true);
    }
  );

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("./match", function(req, res) {
    var differences = [];
    var maxDif;
    if (req.role.toLowerCase().trim() == "candidate") {
      for (i=0; i < emloyers.length(); i++) {
        for (j = 0; j < req.scores.length(); j++) {
          difference[j] += Math.abs(req.scores[j] - employers[i].scores[j]);
        }
      }
    } else {
      for (i=0; i < candidates.length(); i++) {
        for (j = 0; j < req.scores.length(); j++) {
          difference[j] += Math.abs(req.scores[j] - candidates[i].scores[j]);
        }
      }
    }
    return differences[indexOf(Math.min(differences))];
  });


  app.post("/api/clear", function() {
    // Empty out the arrays of data
    candidates = [];
    employers = [];

    console.log(tableData);
  });
};
