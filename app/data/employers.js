// import { builtinModules } from "module";

// var languages = ["html", "css", "javascript", "jquery","mysql", "nodejs", "express", "handlebars", "bootstap", "ajax"];
  
// seed employers
var employers = [
  {
    name: "Stark Industries",
    tel: "713-592-0377",
    email: "tony@starkindustries.com",
    website: "http://starkindustries.com/index.php",
    scores: [5,5,5,5,5,5,5,5,5,5],
    role: "employer",
    routeName: "starkindustries"
  },
  {
    name: "DC Comics",
    tel: "212-636-5400",
    email: "info@dccomics.com",
    website: "https://www.dccomics.com/",
    scores: [10,10,10,10,10,10,10,10,10,10],
    role: "employer",
    routeName: "dccomics"
  },
  {
    name: "Marvel Comics",
    tel: "212-576-4000",
    email: "marvelsubs@midtowncomics.com",
    website: "https://marvel.com/",
    scores: [1,1,1,1,1,1,1,1,1,1],
    role: "employer",
    routeName: "marvelcomics"
  }
];

module.exports = employers;
