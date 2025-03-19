const mongoose = require("mongoose");
const { data } = require("./data.js");
const jobs = require("../models/jobs.js");

const mong_Url = "mongodb://127.0.0.1:27017/hopehands";

main()
  .then(() => {
    console.log("connected to DB");
    console.log("Data was initialized");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mong_Url);
}

let initData = async () => {
  await jobs.deleteMany({});
  await jobs.insertMany(data);
};

initData();
