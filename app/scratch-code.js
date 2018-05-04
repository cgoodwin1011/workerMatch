app.post("/api/match", function(req, res) {
  // var nObs = -1;
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