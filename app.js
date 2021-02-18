//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workitems = [];

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

  var day = date.getDate();
  res.render("list", {newList: day, newListItems: items});
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  if(req.body.list === "Work"){
    workitems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/work", function (req, res) {
  res.render("list", {newList: "Work List", newListItems: workitems});
});

app.listen("3000", function() {
  console.log("server is started at port 3000.");
});
