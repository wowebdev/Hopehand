const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

app.set("views", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.listen("3000", (req, res) => {
  console.log("Listening to the port 3000");
});

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/login/jobgiver", (req, res) => {
  res.render("users/loginEmp.ejs");
});

app.get("/signup/jobgiver", (req, res) => {
  res.render("users/signupEmp.ejs");
});

app.get("/login/worker", (req, res) => {
  res.render("users/loginworker.ejs");
});

app.get("/signup/worker", (req, res) => {
  res.render("users/signupworker.ejs");
});
