const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const availableJobs = require("./models/jobs");
const mongoose = require("mongoose");

const mong_url = "mongodb://127.0.0.1:27017/hopehands";

app.set("views", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

async function main() {
  await mongoose.connect(mong_url);
}

app.listen("3000", (req, res) => {
  console.log("Listening to the port 3000");
});

app.get("/home", (req, res) => {
  res.render("mainpage/main.ejs");
});

app.get("/jobs", async (req, res) => {
  try {
    let jobs = await availableJobs.find();
    res.render("availablejobs/index.ejs", { jobs });
  } catch (e) {
    console.log(e);
  }
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

app.get("/profile/edit/worker", (req, res) => {
  res.render("profile/editworkerprofile.ejs");
});

app.get("/profile/edit/jobgiver", (req, res) => {
  res.render("profile/editjobgiverprofile.ejs");
});

app.get("/profile/jobgiver", (req, res) => {
  res.render("profile/jobgiverprofile.ejs");
});

app.get("/profile/worker", (req, res) => {
  res.render("profile/workerprofile.ejs");
});
app.get("/about", (req, res) => {
  res.render("About/About.ejs");
});

app.get("/workerlistings", (req, res) => {
  res.render("listings/workerlistings.ejs");
});

app.get("/jobgiverlistings", (req, res) => {
  res.render("listings/jobgiverlistings.ejs");
});

app.get("/viewworker", (req, res) => {
  res.render("profile/viewworkerprofile.ejs");
});

