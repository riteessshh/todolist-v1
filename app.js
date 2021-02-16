//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();
  var day = "";
  if (today.getDay() === 6) {
    day = "Saturday";
  } else if (today.getDay() === 5) {
    day = "friday";
  } else if (today.getDay() === 4) {
    day = "thrusday";
  } else if (today.getDay() === 3) {
    day = "wednesday";
  } else if (today.getDay() === 2) {
    day = "tuesday";
  } else if (today.getDay() === 1) {
    day = "monday";
  } else if (today.getDay() === 0) {
    day = "sunday";
  }
  res.render("list", {
    kindaDay: day
  });
});

app.listen("3000", function() {
  console.log("server is started at port 3000.");
});
