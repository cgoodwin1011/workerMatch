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
 
  // Displays all employers
  app.get("/api/employers", function(req, res) {
    res.json(employers);
  });

  // Displays a single employer, or returns false
  app.get("/api/employers/:employer", function(req, res) {
    var chosen = req.params.employer;

    for (var i = 0; i < employers.length; i++) {
      if (chosen === employers[i].routeName) {
        return res.json(employers[i]);
      }
    }

    return res.json(false);
  });

  app.get("/api/candidates", function(req, res) {
    res.json(candidates);
  });


  // Displays a single chcandidate aracter, or returns false
  app.get("/api/candidates/:candidate", function(req, res) {
    var chosen = req.params.candidate;

    for (var i = 0; i < candidates.length; i++) {
      if (chosen === candidates[i].routeName) {
        return res.json(candidates[i]);
      }
    }

    return res.json(false);
  });


  // API POST Requests
 
  app.post("/api/candidates", function(req, res) {
    // puts data in canddiates
    candidates.push(req.body);
      res.json(true);
    }
  );

  app.post("/api/employers", function(req, res) {
    // puts data in employers array
      employers.push(req.body);
      res.json(true);
    }
  );

  app.get("/api/candidatematch", function(req, res) {
    var differences = [];
    var candidate = candidates[candidates.length-1];
    for (i=0; i < employers.length; i++) {
      differences.push(0);
      for (j = 0; j < candidate.scores.length; j++) {
        differences[i] += Math.abs(candidate.scores[j] - employers[i].scores[j]);
      }
    }
    var min = Math.min.apply(null, differences);
    var  employerNum = differences.indexOf(min);

    var output =  "<h1>You match with "+(employers[employerNum].name+"</h1>")
    output += "<a href='/api/employers/"+employers[employerNum].routeName+"'>"+"Click Here for more info</a>";
    res.send(output);

  });

  app.get("/api/employermatch", function(req, res) {
    if(employers.length == 3) {
      alert("You need to enter your company profile first");
      return false;
    }
    var differences = [];
    var employer = employers[employers.length-1];
    for (i=0; i < candidates.length; i++) {
      differences.push(0);
      for (j = 0; j < employer.scores.length; j++) {
        differences[i] += Math.abs(employer.scores[j] - candidates[i].scores[j]);
      }
    }
    var min = Math.min.apply(null, differences);
    var  candidateNum = differences.indexOf(min);

    var output =  "<h1>You match with "+(candidates[candidateNum].name+"</h1>")
    output += "<a href='/api/employers/"+candidates[candidateNum].routeName+"'>"+"Click Here for more info</a>";
    res.send(output);

  });

}
