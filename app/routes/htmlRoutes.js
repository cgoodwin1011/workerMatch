// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // this code handles when users "visit" a page.
  // ---------------------------------------------------------------------------
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/employers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employer.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
