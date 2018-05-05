var path = require("path");

var getMatch = function (person, arrayOfPersons) {
  var differences = [];
  for (i = 0; i < arrayOfPersons.length(); i++) {
      for (j = 0; j < arrayOfPersons[i].scores.length(); j++) {
        difference[j] += Math.abs(peson.scores[j] - arrayOfPersons[i].scores[j]);
      }
    }
  return arrayOfPersons[differences[indexOf(Math.min(differences))]];
};

module.exports = getMatch;